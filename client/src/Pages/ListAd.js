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
    const isLoad = useSelector(state => state.searchReducer.isLoad)
    useEffect(() => {
        dispatch(getAllSearch())
        dispatch(getAllWork())
    }, [])
const [list, setList] = useState(true)
    console.log("list",list)
    return (
        <div>
        <div style={{display:'flex', alignItems:'center', width:'50%', marginLeft:'auto', marginRight:'auto', height:'80px'}}> 
            <h4>search list</h4>
            <div className="switch-toggle" style={{color:'red'}}>
            <label>
            <input type="checkbox" defaultChecked onClick={()=>setList(!list)} />
            <span />
            </label>
            </div>
            <h4>work list</h4>
        </div>
        {isLoad?<Loading/>:list?<ListWork/>:<ListSearch/>}
        </div>
    )
}

export default ListAd
