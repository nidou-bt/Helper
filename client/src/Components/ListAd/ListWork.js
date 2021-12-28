import React from 'react'
import { useSelector } from 'react-redux'
import WorkCard from '../Card Ad/WorkCard'

import Loading from '../Loading'
const ListWork = () => {
    const workList = useSelector(state => state.workReducer.workList)
    const isLoad = useSelector(state => state.workReducer.isLoad)
    const isError = useSelector(state => state.workReducer.isError)
    return (
        <div>
            {
                isLoad?<Loading/>:
                isError?<p>error</p>:
                workList.length===0?<h4>there is no Work Ad to show</h4>:
                <div style={{display:'flex',flexWrap:'wrap', justifyContent:"space-evenly"}}>
                {workList.map((el)=><WorkCard el={el} key={el._id}/> )}
        </div>
                
            }
            
        </div>
    )
}

export default ListWork
