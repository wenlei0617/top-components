import * as React from 'react';
import './styles/upload.scss';
import uplodaRequest from './utils/upload';

enum ResponseStatus {
  UPLOADING = 'uploading',
  DONE = 'done ',
  ERROR = 'error',
  REMOVED = 'removed',
}

interface FilesProps {
  uid: string;
  name: string;
  status: ResponseStatus;
  url: string;
  thumbUrl?: string;
  [index: string]: any;
}

interface Iprops {
  children: React.ReactChild;
  defaultFileList?: object[];
  accept?: string;
  action?: string;
  headers?: object; //设置上传的请求头部
  fileList?: object[]; //已经上传的文件列表
  multiple?: boolean; //是否支持多选文件
  name?: string; //发到后台的文件参数名
  beforeUpload?: (files: FileList | null) => boolean; //上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传
  onChange?: (info: {
    file: FilesProps;
    fileList: FilesProps[];
    event: React.ChangeEvent<HTMLInputElement>;
  }) => void;
  onRemove?: () => void;
}
const Upload: React.FC = (props: Iprops) => {
  const [filesList, setFileList] = React.useState<any>([]);
  const { children, accept, beforeUpload, action, headers, onChange } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (beforeUpload && beforeUpload(files) === false) {
      return;
    }
    if (files) {
      Object.values(files).forEach((item: any) => {
        const formData = new FormData();
        formData.append(`topC-upload-${Date.now()}`, item);
        uplodaRequest({
          headers,
          url: action,
          data: formData,
        })
          .then(response => {
            const info = { ...item, ...response };
            setFileList([...filesList, info]);
            onChange &&
              onChange({
                file: item,
                fileList: [...filesList, info],
                event,
              });
          })
          .catch(err => {
            const info = { ...item, ...err };
            onChange &&
              onChange({
                file: item,
                fileList: [...filesList, info],
                event,
              });
          });
      });
    }
  };
  return (
    <div className='topC-upload'>
      <span>
        <input type='file' accept={accept} onChange={handleChange} />
        {children}
      </span>
    </div>
  );
};
Upload.defaultProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {},
};

export default Upload;
