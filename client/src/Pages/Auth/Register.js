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
      <form style={{ margin: "20px" }}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" style={{ marginLeft: "10px" }}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
            name="name"
            onChange={handelChange}
            value={user.name}
          />
          <small id="emailHelp" className="form-text text-muted">
            Required
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" style={{ marginLeft: "10px" }}>
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="LastName"
            placeholder="Enter your last name"
            name="LastName"
            onChange={handelChange}
            value={user.LastName}
          />
          <small id="emailHelp" className="form-text text-muted">
            Required
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" style={{ marginLeft: "10px" }}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            required
            name="email"
            onChange={handelChange}
            value={user.email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" style={{ marginLeft: "10px" }}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
            name="password"
            onChange={handelChange}
            value={user.password}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "5px", marginLeft: "50px" }}
          onClick={(e) => handelSave(e)}
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
