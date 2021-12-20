import React, { useEffect } from 'react'
import {useDispatch} from "react-redux";
import ListSearch from '../Components/ListAd/ListSearch'
import ListWork from '../Components/ListAd/ListWork'
import { getAllSearch, getAllSearchByAuth, getSearchById } from '../JS/actions/searchAd';
import { getAllWork } from '../JS/actions/workAd';
const ListAd = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSearch())
        dispatch(getAllWork())
    }, [])
    
    
    const handelClick=(e)=>{
        e.preventDefault();
        // dispatch(getUser())
        // let id="61c04a63dc17492945a442f8";
        // dispatch(getSearchById(id))
        // dispatch(getAllSearchByAuth())
        dispatch(getAllWork())
    }
    return (
        <div>
            list ad
            <button onClick={handelClick}>get by id</button>
            <ListSearch/>
            <ListWork/>
        </div>
    )
}

export default ListAd
