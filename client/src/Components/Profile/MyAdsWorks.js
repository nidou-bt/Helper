import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWorkByAuth } from '../../JS/actions/workAd'
const MyAdsWorks = () => {
    const workList = useSelector(state => state.workReducer.workList)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllWorkByAuth())
    }, [])
    return (
        <div>
            my ads works
            {workList.map((el,i)=><p key={i} >{el._id}</p>)}
        </div>
    )
}

export default MyAdsWorks
