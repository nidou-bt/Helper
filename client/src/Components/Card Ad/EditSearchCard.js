import React, { useState } from "react";
import Select from "react-select";
import { typeJobTab } from "../Profile/data";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getSearchById, updateSearchById } from "../../JS/actions/searchAd";

const EditSearchCard = ({ element }) => {

  const searchAd = useSelector((state) => state.searchReducer.searchAd);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState([]);
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(searchAd.imageUrl);
  const [updateSearch, setUpdateSearch] = useState(searchAd);

  const handleShow = () => {
    dispatch(getSearchById(element._id));
    setShow(true);
  };
  const handelChange = (e) => {
    setUpdateSearch({
      ...updateSearch,
      [e.target.name]: e.target.value,
      typeJob: selectedOption.map((el) => el.value),
    });
  };
  // console.log("setUpdateSearch",updateSearch );
  const handleSave = () => {
    setShow(false);
    dispatch(updateSearchById(element._id, file, updateSearch));
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <button
        onClick={handleShow}
        style={{ backgroundColor: "#f8f9fa", border: "none", marginR: "-3px" }}
      >
        <FontAwesomeIcon color="gray" className="btnicon" icon={faEdit} />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>updating Search {element._id} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
              <p>phone</p>
              <input
                style={{}}
                type="number"
                placeholder="..."
                name="phone"
                onChange={handelChange}
              />
            </div>
            <Select
              options={typeJobTab}
              isMulti
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              style={{ width: "50px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                margin: "5px",
              }}
            >
              <p>bio</p>
              <input
                style={{}}
                type="text"
                placeholder="..."
                name="bio"
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
              <p>image</p>
              <input
                style={{}}
                type="file"
                placeholder="..."
                name="name"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            {selectedOption.map((el) => console.log("el", el.value))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditSearchCard;
