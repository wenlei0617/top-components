import Axios from 'axios';
interface RequestProps {
  url?: string;
  data?: FormData;
  headers?: Object;
}
export default (params: RequestProps) => {
  return new Promise((resolve, reject) => {
    Axios({
      method: 'POST',
      ...params,
    }).then(response => {
      resolve(response.data);
    });
  });
};
