import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoritSearch from "../Components/FavoritAd/FavoritSearch";
import FavoritWork from "../Components/FavoritAd/FavoritWork";
import Loading from "../Components/Loading";
import { getAllSearch } from "../JS/actions/searchAd";
import { getAllWork } from "../JS/actions/workAd";

const FavoritAd = () => {
    const isLoad = useSelector(state => state.searchReducer.isLoad)
    const isLoads= useSelector(state=>state.workReducer.isLoad)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSearch());
    dispatch(getAllWork());
  }, []);
  return (
    <div>
        {
            isLoad||isLoads?<Loading/>:
      <div><FavoritSearch />
        <FavoritWork /></div>
    }
    </div>
  );
};

export default FavoritAd;
