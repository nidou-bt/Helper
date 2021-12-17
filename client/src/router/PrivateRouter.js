import React from 'react'
import {useSelector } from "react-redux";
import { Navigate, Route } from 'react-router-dom';
const PrivateRouter = (props ) => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);

    return (
      <Route path={props.path} element={!isAuth ? <Navigate to="/login" /> : props.element}/>


    )
}

export default PrivateRouter
