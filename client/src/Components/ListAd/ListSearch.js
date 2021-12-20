import React from 'react'
import { useSelector } from 'react-redux'
import SearchCard from "../Card Ad/SearchCard"
const ListSearch = () => {
    const searchList = useSelector(state => state.searchReducer.searchList)
    return (
        <div>
            {searchList.map((el)=><SearchCard el={el} key={el._id}/> )}
            
        </div>
    )
}

export default ListSearch
