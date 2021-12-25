import React, {useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { typeJobTab } from "../Profile/data";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "./Add.css"
import { addSearchAd } from '../../JS/actions/searchAd';
const AddSearch = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const [newSearch, setNewSearch] = useState({adresse:"", phone:"",bio:"", typeJob:[]})
    const [file, setFile] = useState();
    const handelChange=(e)=>{
        setNewSearch({...newSearch,[e.target.name]: e.target.value})
    }
    
const handelSave=async()=>{
    // console.log("selectedOption",selectedOption)
 //let T2=selectedOption.map(el=>el.value)
 let T2=[]
selectedOption.forEach(el=>T2.push(el.value))
//  console.log("T2",T2)
let obj = newSearch
obj.typeJob=T2
setNewSearch(obj)
// console.log("typeJob",newSearch.typeJob)
// console.log("newSearch",newSearch)
dispatch(addSearchAd( newSearch,file, navigate))

}

    return (
        <div>
            Add Search
            <div>
                <p>adresse</p>
                <input type="text" placeholder='...' name="adresse" onChange={handelChange} />
            </div>
            <div>
                <p>phone</p>
                <input type="number" placeholder='...' name="phone" onChange={handelChange} />
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
                <input type="text" placeholder='...' name="bio" onChange={handelChange} />
            </div>
            <div>
                <p>image</p>
                <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
            </div>
            <button onClick={handelSave} >Add new Ad</button>
        </div>
    )
}

export default AddSearch
