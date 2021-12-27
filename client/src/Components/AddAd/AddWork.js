import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import { addWorkAd } from '../../JS/actions/workAd';
import { typeJobTab } from "../Profile/data";
import "./Add.css";

const AddWork = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const [file, setFile] = useState();
    const [newWork, setNewWork] = useState({
        titre:"",
        description:"",
        adresse:"",
        phone:"",
        typeJob:[]
    })
    const handelChange = (e) => {
        setNewWork({ ...newWork, [e.target.name]: e.target.value });
      };
    const handelSave=()=>{
    selectedOption.forEach((el) => newWork.typeJob.push(el.value));
    console.log("newWork",newWork)
    dispatch(addWorkAd(newWork,file,navigate))
    }

    return (
        <div>
            <div>
        <p>titre</p>
        <input
          type="text"
          placeholder="..."
          name="titre"
          onChange={handelChange}
        />
      </div>
      <div>
        <p>description</p>
        <input
          type="text"
          placeholder="..."
          name="description"
          onChange={handelChange}
        />
      </div>
        <div>
        <p>adresse</p>
        <input
          type="text"
          placeholder="..."
          name="adresse"
          onChange={handelChange}
        />
      </div>
      <div>
        <p>phone</p>
        <input
          type="number"
          placeholder="..."
          name="phone"
          onChange={handelChange}
        />
      </div>
      <div>
        <p>typeJob</p>
        <Select
          options={typeJobTab}
          isMulti
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          className="styleSelected"
        />
      </div>
      <div>
        <p>image</p>
        <input type="file" onChange={(e) => setFile(e.target.files)} multiple />
      </div>
      <button onClick={handelSave}>Add new Work</button>
        </div>
    )
}

export default AddWork
