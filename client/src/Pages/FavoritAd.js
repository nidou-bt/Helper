import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import FavoritSearch from '../Components/FavoritAd/FavoritSearch'
import FavoritWork from '../Components/FavoritAd/FavoritWork'
import { getAllSearch } from '../JS/actions/searchAd';
import { getAllWork } from '../JS/actions/workAd';

const FavoritAd = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSearch())
        dispatch(getAllWork())
    }, [])
    return (
        <div>
            FavoritAd
            <FavoritSearch/>
            <FavoritWork/>
        </div>
    )
}

export default FavoritAd
