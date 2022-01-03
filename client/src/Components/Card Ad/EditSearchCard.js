import React, { useState } from "react";
import Select from "react-select";
import { typeJobTab } from "../Profile/data";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getSearchById, updateSearchById } from "../../JS/actions/searchAd";
import "./Card.css";
const EditSearchCard = ({ element }) => {
  const searchAd = useSelector((state) => state.searchReducer.searchAd);
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState([]);
  const [show, setShow] = useState(false);
  const [file, setFile] = useState();
  const [updateSearch, setUpdateSearch] = useState(searchAd);

  const handleShow = () => {
    dispatch(getSearchById(element._id));
    setShow(true);
  };
  const handelChange = (e) => {
    setUpdateSearch({
      ...updateSearch,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = () => {
    let T2 = [];
    selectedOption.forEach((el) => T2.push(el.value));
    let obj = searchAd;
    obj.adresse = updateSearch.adresse
      ? updateSearch.adresse
      : searchAd.adresse;
    obj.phone = updateSearch.phone ? updateSearch.phone : searchAd.phone;
    obj.typeJob =
      selectedOption && selectedOption.length > 0 ? T2 : searchAd.typeJob;
    obj.bio = updateSearch.bio ? updateSearch.bio : searchAd.bio;
    dispatch(updateSearchById(element._id, file, obj));
    setShow(false);
    setUpdateSearch({});
  };
  const handleClose = () => {
    setSelectedOption([]);
    setShow(false);
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
      <Modal show={show} onHide={handleClose} style={{marginTop:'50px'}} >
        <Modal.Header closeButton>
          <Modal.Title><h3>Updating Search</h3> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <h4>Adresse</h4>
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
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <h4>Phone</h4>
              <input
                style={{}}
                type="number"
                placeholder="..."
                name="phone"
                onChange={handelChange}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <h4>Type Job</h4>

              <Select
                options={typeJobTab}
                isMulti
                defaultValue={
                  // typeJobTab && searchAd && searchAd.typeJob
                  //   ? typeJobTab.filter((el) =>
                  //       searchAd.typeJob.includes(el.value)
                  //     )
                  //   : 
                    []
                }
                onChange={setSelectedOption}
                className="styleSelected"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <h4>Bio</h4>
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
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <h4>Image</h4>
              <input
                style={{}}
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
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
