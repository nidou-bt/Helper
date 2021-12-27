import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { typeJobTab } from "../Profile/data";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import { addSearchAd } from "../../JS/actions/searchAd";
const AddSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [newSearch, setNewSearch] = useState({
    adresse: "",
    phone: "",
    bio: "",
    typeJob: [],
  });
  const [file, setFile] = useState();
  const handelChange = (e) => {
    setNewSearch({ ...newSearch, [e.target.name]: e.target.value });
  };

  const handelSave = () => {
    let T2 = [];
    selectedOption.forEach((el) => T2.push(el.value));
    let obj = newSearch;
    obj.typeJob = T2;
    
    // selectedOption.forEach((el) => newSearch.typeJob.push(el.value));
    // console.log("typeJob",newSearch)
    dispatch(addSearchAd(obj, file, navigate));
  };

  return (
    <div>
      Add Search
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
        <p>bio </p>
        <input
          type="text"
          placeholder="..."
          name="bio"
          onChange={handelChange}
        />
      </div>
      <div>
        <p>image</p>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <button onClick={handelSave}>Add new Ad</button>
    </div>
  );
};

export default AddSearch;
