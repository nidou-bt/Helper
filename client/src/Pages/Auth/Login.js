import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../JS/actions/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
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
    <div>
      <form style={{ margin: "20px" }}>
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
          onClick={(e) => handelLogin(e)}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
