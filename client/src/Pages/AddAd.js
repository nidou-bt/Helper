import React, { useState } from "react";
import AddSearch from "../Components/AddAd/AddSearch";
import AddWork from "../Components/AddAd/AddWork";

const AddAd = () => {
  const [list, setList] = useState(false);
  return (
    <div  style={{minHeight:'500px'}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          height: "80px",
        }}
      >
        <h4 style={{ marginRight: "20px" }}>search list</h4>
        <label className="switch">
          <input
            type="checkbox"
            defaultChecked
            onClick={() => setList(!list)}
          />
          <span className="slider round" />
        </label>
        <h4 style={{ marginLeft: "20px" }}>work list</h4>
      </div>
      <div>{!list ? <AddWork /> : list ? <AddSearch /> : null}</div>
    </div>
  );
};

export default AddAd;
