import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";
import { register } from "../../JS/actions/user";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    LastName: "",
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handelSave = (e) => {
    e.preventDefault();
    dispatch(register(user, navigate));
    setUser({
      name: "",
      LastName: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', marginTop:'20px' }}>
      <div className="screen-1">
        <div className="email">
          <label htmlFor="email">Name</label>
          <div className="sec-2">
            <ion-icon name="mail-outline" />
            <input type="text" className="pas" 
            placeholder="Enter your name"
            required
            name="name"
            onChange={handelChange}
            value={user.name} />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Last Name</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline" />
            <input type="text"
            className="pas" 
            placeholder="Enter your last name"
            name="LastName"
            onChange={handelChange}
            value={user.LastName} />
            <ion-icon className="show-hide" name="eye-outline" />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Email</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline" />
            <input type="email" className="pas" 
            placeholder="Enter email"
            required
            name="email"
            onChange={handelChange}
            value={user.email} />
            <ion-icon className="show-hide" name="eye-outline" />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline" />
            <input className="pas" 
            type="password"
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
          onClick={(e) => handelSave(e)}>Save</button>
  
      </div>
    </div>
    </div>
  );
};
export default Register;
