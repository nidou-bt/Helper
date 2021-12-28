import React from "react";
import { useSelector } from "react-redux";
import SearchCard from "../Card Ad/SearchCard";
import Loading from "../Loading";

const FavoritSearch = () => {
  const searchList = useSelector((state) => state.searchReducer.searchList);
  const user = useSelector((state) => state.userReducer.user);
  const isLoads = useSelector((state) => state.favoritReducer.isLoad);

  if (isLoads) {
    return <Loading />;
  }
  return (
    <div>
      hi
      {searchList && user
        ? searchList.map((el) =>
            user.F_Search.includes(el._id) ? (
              <SearchCard el={el} key={el._id} />
            ) : null
          )
        : null}
    </div>
  );
};

export default FavoritSearch;
