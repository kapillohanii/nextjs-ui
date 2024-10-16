import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showCustomAlert = (message: string) => {
  toast.success(
    <div className="flex items-center text-sm">
      <span>{message}</span>
    </div>,
    {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
    }
  );
};

const CustomAlertContainer = () => {
  return <ToastContainer />;
};

export { showCustomAlert, CustomAlertContainer };