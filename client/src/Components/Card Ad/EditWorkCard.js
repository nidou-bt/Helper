import React, { useState } from "react";
import Select from "react-select";
import { typeJobTab } from "../Profile/data";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import "./Card.css";
import { getWorkById, updateWorkAd } from "../../JS/actions/workAd";
const EditWorkCard = ({element}) => {
  const dispatch = useDispatch()
  const workAd = useSelector(state => state.workReducer.workAd)
  const [updateWork, setUpdateWork] = useState({})
  const [selectedOption, setSelectedOption] = useState([]);
  const [show, setShow] = useState(false);
  const [file, setFile] = useState()
  const handleClose = () => setShow(false);
  const handleShow = () =>{ 
    dispatch(getWorkById(element._id))
    setShow(true)};
  const handelChange = (e) => {
    setUpdateWork({...updateWork, [e.target.name]: e.target.value})
  };
const handleUpdate=()=>{
  let T2 = [];
  selectedOption.forEach((el) => T2.push(el.value));
let obj=workAd;
obj.titre=updateWork.titre?updateWork.titre:workAd.titre
obj.adresse=updateWork.adresse?updateWork.adresse:workAd.adresse
obj.description=updateWork.description?updateWork.description:workAd.description
obj.phone=updateWork.phone?updateWork.phone:workAd.phone
obj.typeJob=selectedOption && selectedOption.length > 0 ? T2:workAd.typeJob

console.log("obj",obj)
  dispatch(updateWorkAd(element._id, file, obj))
  setShow(false);
}
  return (
    <div>
      <button
        onClick={handleShow}
        style={{
          backgroundColor: "#f8f9fa",
          border: "none",
          marginRight: "-3px",
          marginTop:'10px'
        }}
      >
        <FontAwesomeIcon color="gray" className="btnicon" icon={faEdit} />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{element._id}</Modal.Title>
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
          <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                margin: "5px",
              }}
            >
              <p>typeJob</p>

              <Select
                options={typeJobTab}
                isMulti
                defaultValue={
                  typeJobTab&&workAd&&workAd.typeJob?
                  typeJobTab.filter((el) =>
                        workAd.typeJob.includes(el.value)
                      ):
                   []
                }
                onChange={setSelectedOption}
                className="styleSelected"
              />
            </div>
          <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                margin: "5px",
              }}>
          <p>images</p>
            <input
              style={{}}
              type="file"
              onChange={(e) => setFile(e.target.files)} multiple
            />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditWorkCard;
