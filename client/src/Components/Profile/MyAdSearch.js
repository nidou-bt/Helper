import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSearchByAuth } from "../../JS/actions/searchAd";
import SearchCard from "../Card Ad/SearchCard";
import Loading from "../Loading";

// 3ando l7a9 f carta wa7da
const MyAdSearch = () => {
  const searchList = useSelector((state) => state.searchReducer.searchList);
  const isLoad = useSelector((state) => state.searchReducer.isLoad);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSearchByAuth());
  }, []);
  if (isLoad) {
    return <Loading />;
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        marginLeft: "1.3%",
      }}
    >
      {searchList.map((el) => (
        <SearchCard el={el} key={el._id} />
      ))}
    </div>
  );
};

export default MyAdSearch;
