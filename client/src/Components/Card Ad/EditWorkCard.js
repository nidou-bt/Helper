import React, { useState } from "react";
import Select from "react-select";
import { typeJobTab } from "../Profile/data";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import "./Card.css";
const EditWorkCard = () => {
  const [show, setShow] = useState(false);
const [file, setFile] = useState()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelChange = (e) => {
    
  };
  return (
    <div>
      <button
        onClick={handleShow}
        style={{
          backgroundColor: "#f8f9fa",
          border: "none",
          marginRight: "-3px",
        }}
      >
        <FontAwesomeIcon color="gray" className="btnicon" icon={faEdit} />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: "5px",
            }}
          >
            <p>titre</p>
            <input
              style={{}}
              type="text"
              placeholder="..."
              name="titre"
              onChange={handelChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: "5px",
            }}
          >
            <p>adresse</p>
            <input
              style={{}}
              type="text"
              placeholder="..."
              name="adresse"
              onChange={handelChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: "5px",
            }}
          >
            <p>description</p>
            <input
              style={{}}
              type="text"
              placeholder="..."
              name="adresse"
              onChange={handelChange}
            />
            </div>
            <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              margin: "5px",
            }}
          >
            <p>phone</p>
            <input
              style={{}}
              type="text"
              placeholder="..."
              name="phone"
              onChange={handelChange}
            />
          </div>
          <div>
          <p>images</p>
            <input
              style={{}}
              type="file"
            onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditWorkCard;
