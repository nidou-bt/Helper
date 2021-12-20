import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AddAd from "../Pages/AddAd";
import FavoritAd from "../Pages/FavoritAd";
import Profile from "../Pages/Profile";
const PrivateRouter = ({ element }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const token = localStorage.getItem("token");
  if (!token && !isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      {element && element.name === "Profile" ? (
        <Profile />
      ) : element && element.name === "AddAd" ? (
        <AddAd />
      ) : element && element.name === "FavoritAd" ? (
        <FavoritAd />
      ) : null}
    </div>
  );
};
export default PrivateRouter;
