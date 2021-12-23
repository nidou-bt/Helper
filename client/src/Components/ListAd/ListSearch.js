import React from 'react'
import { useSelector } from 'react-redux'
import SearchCard from "../Card Ad/SearchCard"
import Loading from '../Loading'
const ListSearch = () => {
    const searchList = useSelector(state => state.searchReducer.searchList)
    const isLoad = useSelector(state => state.searchReducer.isLoad)
    const isError = useSelector(state => state.searchReducer.isError)
    return (
        <div>
        {isLoad?<Loading/>:
        isError?<p>error</p>:
        searchList.length===0?<p>there is no Search Ad to show </p>:
        <div style={{display:'flex',flexWrap:'wrap', justifyContent:"space-evenly"}}>
        {searchList.map((el)=><SearchCard el={el} key={el._id}/> )}
        </div>}
        </div>
    )
}

export default ListSearch
