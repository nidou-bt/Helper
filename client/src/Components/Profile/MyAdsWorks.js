import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWorkByAuth } from "../../JS/actions/workAd";
import WorkCard from "../Card Ad/WorkCard";
import Loading from "../Loading";
const MyAdsWorks = () => {
  const workList = useSelector((state) => state.workReducer.workList);
  const isLoad = useSelector((state) => state.workReducer.isLoad);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWorkByAuth());
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
        marginLeft: "2.5%",
      }}
    >
      {workList.map((el) => (
        <WorkCard el={el} key={el._id} />
      ))}
    </div>
  );
};

export default MyAdsWorks;
