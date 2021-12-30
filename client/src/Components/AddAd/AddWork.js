import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { addWorkAd } from "../../JS/actions/workAd";
import { typeJobTab } from "../Profile/data";
import "./Add.css";

const AddWork = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [file, setFile] = useState();
  const [newWork, setNewWork] = useState({
    titre: "",
    description: "",
    adresse: "",
    phone: "",
    typeJob: [],
  });
  const handelChange = (e) => {
    setNewWork({ ...newWork, [e.target.name]: e.target.value });
  };
  const handelSave = () => {
    selectedOption.forEach((el) => newWork.typeJob.push(el.value));
    console.log("newWork", newWork);
    dispatch(addWorkAd(newWork, file, navigate));
  };
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <div className="screen-1">
          <div className="email">
            <label htmlFor="email">Titre</label>
            <div className="sec-2">
              <ion-icon name="mail-outline" />
              <input
                type="text"
                placeholder="..."
                name="titre"
                onChange={handelChange}
              />
            </div>
          </div>
          <div className="password">
            <label htmlFor="password">Description</label>
            <div className="sec-2">
              <ion-icon name="lock-closed-outline" />
              <input
                className="pas"
                type="text"
                placeholder="..."
                name="description"
                onChange={handelChange}
              />
              <ion-icon className="show-hide" name="eye-outline" />
            </div>
          </div>
          {/*  */}
          <div className="password">
            <label htmlFor="password">Adresse</label>
            <div className="sec-2">
              <ion-icon name="lock-closed-outline" />
              <input
                className="pas"
                type="text"
                placeholder="..."
                name="adresse"
                onChange={handelChange}
              />
              <ion-icon className="show-hide" name="eye-outline" />
            </div>
          </div>
          {/*  */}
          <div className="password">
            <label htmlFor="password">Phone</label>
            <div className="sec-2">
              <ion-icon name="lock-closed-outline" />
              <input
                className="pas"
                type="number"
                placeholder="..."
                name="phone"
                onChange={handelChange}
              />
              <ion-icon className="show-hide" name="eye-outline" />
            </div>
          </div>
          {/* type Job */}
          <div className="password">
            <label htmlFor="password">Type Job</label>
            <div className="sec-2">
              <ion-icon name="lock-closed-outline" />
              <Select
                options={typeJobTab}
                isMulti
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                className="styleSelectedAdd"
              />
              <ion-icon className="show-hide" name="eye-outline" />
            </div>
          </div>
          {/*image  */}
          <div className="password">
            <label htmlFor="password">Images</label>
            <div className="sec-2">
              <ion-icon name="lock-closed-outline" />
              <input
                className="pas"
                type="file"
                onChange={(e) => setFile(e.target.files)}
                multiple
              />
              <ion-icon className="show-hide" name="eye-outline" />
            </div>
          </div>
          <button
            className="login"
            type="submit"
            style={{ marginTop: "5px", marginLeft: "50px" }}
            onClick={handelSave}
          >
            Add New Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWork;
