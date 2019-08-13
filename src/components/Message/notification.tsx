import * as React from 'react';
import * as ReactDom from 'react-dom';
import Notice from './notice';
import { getKey } from './utils/util';

export interface NoticeProps {
  type: string;
  content: string;
  duration: number;
  onClose: () => void;
  [index: string]: any;
}

const useNotices = (): any[] => {
  const [notices, setNotices] = React.useState<NoticeProps[]>([]);
  const intervalRef: any = React.useRef();

  const dispacthAddNotice = (notice: NoticeProps) => {
    const newNotices = [...notices];
    const key = getKey();
    const { duration = 3000 } = notice;
    newNotices.push({ ...notice, key });
    intervalRef.current = newNotices;
    setNotices(newNotices);
    if (duration > 0) {
      setTimeout(() => {
        dispatchRemoveNotices(key);
      }, duration);
    }
    return () => dispatchRemoveNotices(key);
  };

  const dispatchRemoveNotices = (noticeKey: string) => {
    const newNotices = intervalRef.current.filter((notice: NoticeProps) => {
      if (notice.key === noticeKey) {
        notice.onClose && notice.onClose();
        return false;
      }
      return true;
    });
    intervalRef.current = newNotices;
    setNotices(newNotices);
  };
  return [notices, dispacthAddNotice, dispatchRemoveNotices];
};

const Notification = React.forwardRef((_, ref) => {
  const [notices, dispacthAddNotice, dispatchRemoveNotices] = useNotices();
  React.useImperativeHandle(ref, () => ({
    addNotice: dispacthAddNotice,
    removNotice: dispatchRemoveNotices,
  }));
  return notices.map((item: NoticeProps) => {
    return <Notice {...item} />;
  });
});

export const createNotification = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const ref: any = React.createRef();
  ReactDom.render(<Notification ref={ref} />, div);
  return {
    addNotice(notice: NoticeProps) {
      return ref.current.addNotice(notice);
    },
  };
};

export default createNotification();
