import React from "react";
import { useSelector } from "react-redux";
import WorkCard from "../Card Ad/WorkCard";

import Loading from "../Loading";
const ListWork = () => {
  const workList = useSelector((state) => state.workReducer.workList);
  const isLoad = useSelector((state) => state.workReducer.isLoad);
  const isError = useSelector((state) => state.workReducer.isError);
  return (
    <div style={{minHeight:'500px'}}>
      {isLoad ? (
        <Loading />
      ) : workList.length === 0 ? (
        <h4 style={{marginLeft:'30px'}}>There is no Work Ad to show</h4>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            marginLeft:'2.5%'
          }}
        >
          {workList.map((el) => (
            <WorkCard el={el} key={el._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListWork;
