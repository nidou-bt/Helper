import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import ListSearch from '../Components/ListAd/ListSearch'
import ListWork from '../Components/ListAd/ListWork'
import Loading from '../Components/Loading';
import { getAllSearch } from '../JS/actions/searchAd';
import { getAllWork } from '../JS/actions/workAd';
import './Pages.css'
const ListAd = () => {
    const dispatch = useDispatch();
    const isLoad = useSelector(state => state.searchReducer.isLoad);
    const [list, setList] = useState(true);
    useEffect(() => {
        dispatch(getAllSearch())
        dispatch(getAllWork())
    }, [])
    return (
        <div  style={{minHeight:'500px'}}>
        <div style={{display:'flex', justifyContent:'center', width:'50%', marginLeft:'auto', marginRight:'auto', height:'50px', marginTop:'30px'}}> 
            <h4 style={{marginRight:'20px'}}>List of Helpers </h4>
            
            <label className="switch">
                <input type="checkbox" defaultChecked  onClick={()=>setList(!list)}/>
                <span className="slider round" />
            </label>
            
            <h4 style={{marginLeft:'20px'}} >List of Researchers</h4>
        </div>
        {isLoad?<Loading/>:list?<ListWork/>:!list?<ListSearch/>:null}
        </div>
    )
}

export default ListAd
