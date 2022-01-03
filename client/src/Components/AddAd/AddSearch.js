import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { typeJobTab } from "../Profile/data";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import { addSearchAd } from "../../JS/actions/searchAd";
import Notification from "../Notification";

const AddSearch = () => {
  const errors = useSelector(state => state.searchReducer.errors)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState([]);
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
    dispatch(addSearchAd(obj, file, navigate));
  };

  return (
    <div>
      {errors && errors.map((el, i) => <Notification error={el} key={i} />)}
      <div style={{display:'flex', justifyContent:'center', marginTop:'20px' }}>
      <div className="screen-1">
        <div className="email">
          <label htmlFor="email">Adresse</label>
          <div className="sec-2">
            <ion-icon name="mail-outline" />
            <input type="text"
          placeholder="..."
          name="adresse"
          onChange={handelChange} />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Phone</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline" />
            <input className="pas" type="number"
          placeholder="..."
          name="phone"
          onChange={handelChange}/>
            <ion-icon className="show-hide" name="eye-outline" />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">bio</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline" />
            <input className="pas" type="text"
          placeholder="..."
          name="bio"
          onChange={handelChange}/>
            <ion-icon className="show-hide" name="eye-outline" />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">type Job</label>
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
        <div className="password">
          <label htmlFor="password">Image</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline" />
        <input className="pas" 
          type="file" onChange={(e) => setFile(e.target.files[0])}/>
            <ion-icon className="show-hide" name="eye-outline" />
          </div>
        </div>
        <button className="login" type="submit"
          style={{ marginTop: "5px", marginLeft: "50px" }}
          onClick={handelSave}>Add New Search</button>
  
      </div>
    </div>
      
    </div>
  );
};

export default AddSearch;
