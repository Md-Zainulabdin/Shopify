"use client"
export { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";


export const successToast = (val) => {
  return toast.success(val, {
    closeButton: false,
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: false,
    theme: "light",
  });
}

export const errorToast = (val) => {
  return toast.error(val, {
    closeButton: false,
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: false,
    theme: "light",
  });
}