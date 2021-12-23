import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../JS/actions/user";
import Loading from "../Loading";

const Update = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isLoad = useSelector(state => state.userReducer.isLoad)
  const [userU, setUserU] = useState(user);
  const dispatch = useDispatch();
  const handelChange = (e) => {
    setUserU({ ...userU,[e.target.name]: e.target.value });
  };
  const handelSave = (e) => {
    // e.preventDefault();
    dispatch(updateUser(userU));
    setUserU({});
  };
  return (
    <div style={{ width: "400px", marginLeft: "10px" }}>
{isLoad?<Loading/>:<div style={{border:"solid #5B6DCD 1px"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <p>Name </p>
        <input
          style={{ width: "170px" }}
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={handelChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p>Last Name </p>
        <input
          style={{ width: "170px" }}
          type="text"
          placeholder="Enter your last name"
          name="LastName"
          onChange={handelChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p>email </p>
        <input
          style={{ width: "170px" }}
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handelChange}
          // value={userU?userU.email:""}
        />
      </div>
      <button style={{}} onClick={(e) => handelSave(e)}>
        Save
      </button>
       </div>}
    </div>
  );
};

export default Update;
