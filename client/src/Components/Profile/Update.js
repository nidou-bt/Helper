import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../JS/actions/user";
import Loading from "../Loading";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import '../Components.css'
const Update = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isLoad = useSelector(state => state.userReducer.isLoad)
  const [userU, setUserU] = useState(user);
  const dispatch = useDispatch();
  const handelChange = (e) => {
    setUserU({ ...userU,[e.target.name]: e.target.value });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelSave = () => {
    dispatch(updateUser(userU));
    setUserU({});
    setShow(false)
  };
  return (
    <div style={{ width: "400px", marginLeft: "10px" }}>
{isLoad?<Loading/>:<div>
  <button className="updateButton" onClick={handleShow} >
        Update Profile
      </button>
      <Modal show={show} onHide={handleClose} style={{marginTop:'50px'}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h4>Name </h4>
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
          marginTop:'5px'
        }}
      >
        <h4>Last Name </h4>
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
          marginTop:'5px'
        }}
      >
        <h4>Email </h4>
        <input
          style={{ width: "170px" }}
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handelChange}
          // value={userU?userU.email:""}
        />
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handelSave(e)}>
            Save Updates
          </Button>
        </Modal.Footer>
      </Modal>
       </div>}
    </div>
  );
};

export default Update;
