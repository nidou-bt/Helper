import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../JS/actions/user";
import Notification from "../../Components/Notification";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errors = useSelector(state => state.userReducer.errors)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (errors) {
      dispatch(clearErrors());
    }
  }, [])
  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handelLogin = (e) => {
    e.preventDefault();
    dispatch(login(user, navigate));
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <>
    {errors && errors.map((el, i) => <Notification error={el} key={i} />)}
    <div style={{display:'flex', justifyContent:'center', marginTop:'20px' }}>
      <div className="screen-1">
        
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <div className="sec-2">
            <ion-icon name="mail-outline" />
            <input type="email"
            placeholder="Enter email"
            required
            name="email"
            onChange={handelChange}
            value={user.email} />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline" />
            <input className="pas" type="password"
            placeholder="Password"
            required
            name="password"
            onChange={handelChange}
            value={user.password} />
            <ion-icon className="show-hide" name="eye-outline" />
          </div>
        </div>
        <button className="login" type="submit"
          style={{ marginTop: "5px", marginLeft: "50px" }}
          onClick={(e) => handelLogin(e)}>Login</button>
  
      </div>
    </div>
    </>
  );
};

export default Login;
