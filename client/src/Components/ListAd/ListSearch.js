import React from "react";
import { useSelector } from "react-redux";
import SearchCard from "../Card Ad/SearchCard";
import Loading from "../Loading";
const ListSearch = () => {
  const searchList = useSelector((state) => state.searchReducer.searchList);
  const isLoad = useSelector((state) => state.searchReducer.isLoad);
  const isError = useSelector((state) => state.searchReducer.isError);
  return (
    <div style={{minHeight:'500px'}}>
      {isLoad ? (
        <Loading />
      ) : searchList.length === 0 ? (
        <h4 style={{marginLeft:'30px'}}>There is no Search Ad to show </h4>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            marginLeft:'1.5%'
          }}
        >
          {searchList.map((el) => (
            <SearchCard el={el} key={el._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListSearch;
