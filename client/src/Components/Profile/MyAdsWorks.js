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
        <div>
            my ads works
            {workList.map((el)=><WorkCard el={el} key={el._id} />)}
        </div>
    )
}

export default MyAdsWorks
