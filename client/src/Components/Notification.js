import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { clearErrors } from "../JS/actions/user";
import { clearErrorsSearch } from "../JS/actions/searchAd";
import { clearErrorsWork } from "../JS/actions/workAd";
import { clearErrorsF } from "../JS/actions/favorit";
import { useDispatch, useSelector } from "react-redux";
const Notification = ({ error }) => {
  const errors = useSelector((state) => state.userReducer.errors);
  const errorsS = useSelector((state) => state.searchReducer.errors);
  const errorsW = useSelector((state) => state.workReducer.errors);
  const errorsF = useSelector((state) => state.favoritReducer.errors);
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setshow(false);
      if (errors) {
        dispatch(clearErrors());
      }
      if (errorsS) {
        dispatch(clearErrorsSearch());
      }
      if (errorsW) {
        dispatch(clearErrorsWork());
      }
      if (errorsF) {
        dispatch(clearErrorsF());
      }
    }, 3000);
  }, [show, dispatch]);
  return (
    <div>
      {toast.error(error.msg)}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Notification;
