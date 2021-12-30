import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWorkByAuth } from '../../JS/actions/workAd'
import WorkCard from '../Card Ad/WorkCard'
const MyAdsWorks = () => {
    const workList = useSelector(state => state.workReducer.workList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllWorkByAuth())
    }, [])
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            marginLeft:'2.5%'
          }}>
            
            {workList.map((el)=><WorkCard el={el} key={el._id} />)}
        </div>
    )
}

export default MyAdsWorks
