import React from "react";
import { useSelector } from "react-redux";
import WorkCard from "../Card Ad/WorkCard";

import Loading from "../Loading";

const FavoritWork = () => {
  const workList = useSelector((state) => state.workReducer.workList);
  const user = useSelector((state) => state.userReducer.user);
  const isLoads = useSelector((state) => state.favoritReducer.isLoad);
  if (isLoads) {
    return <Loading />;
  }
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "start",
      marginLeft:'2.5%'
    }}>
      {workList && user
        ? workList.map((el) =>
            user.F_Work.includes(el._id) ? (
              <WorkCard el={el} key={el._id} />
            ) : null
          )
        : null}
    </div>
  );
};

export default FavoritWork;
