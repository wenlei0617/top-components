import notification from './notification';
const notice = (
  type: string,
  content: string,
  duration: number,
  onClose: () => void
) =>
  notification.addNotice({
    type,
    content,
    duration,
    onClose,
  });

export default {
  info(content: string, duration: number, onClose: () => void) {
    return notice('info', content, duration, onClose);
  },
  error(content: string, duration: number, onClose: () => void) {
    return notice('error', content, duration, onClose);
  },
  warn(content: string, duration: number, onClose: () => void) {
    return notice('warn', content, duration, onClose);
  },
  success(content: string, duration: number, onClose: () => void) {
    return notice('success', content, duration, onClose);
  },
  loading(content: string, duration: number, onClose: () => void) {
    return notice('loading', content, duration, onClose);
  },
};
