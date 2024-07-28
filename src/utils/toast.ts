import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type: string, message: string) => {
  if (type === 'success') {
    toast.success(message, {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: true,
    });
  } else if (type === 'danger') {
    toast.warning(message, {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: true,
    });
  }
};
