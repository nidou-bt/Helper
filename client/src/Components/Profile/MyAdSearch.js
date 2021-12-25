import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSearchByAuth } from '../../JS/actions/searchAd'
import SearchCard from '../Card Ad/SearchCard'

// 3ando l7a9 f carta wa7da
const MyAdSearch = () => {
    const searchList = useSelector(state => state.searchReducer.searchList)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllSearchByAuth())
    }, [])
    return (
        <div style={{display:'flex',flexWrap:'wrap', justifyContent:"space-evenly"}}>
            my ads search
           {searchList.map((el)=><SearchCard el={el} key={el._id}/> )}
        </div>
    )
}

export default MyAdSearch
