import React from "react";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faMapMarkerAlt,
  faStar as solidstar,
  faPhoneAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularstar } from "@fortawesome/free-regular-svg-icons";
import EditWorkCard from "./EditWorkCard";
import { deleteWorkById } from "../../JS/actions/workAd";
import { useDispatch, useSelector } from "react-redux";
import { addFWork, deleteFWork } from "../../JS/actions/favorit";

// ilawaj 3ala 5adam
const WorkCard = ({ el }) => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const handelDelete = () => {
    dispatch(deleteWorkById(el._id));
    console.log("delete");
  };
  const handelAddFavorit = () => {
    console.log("add Favorit", el._id);
    let favoritWA = { F_workId: el._id };
    dispatch(addFWork(favoritWA));
  };
  const handelDeleteFavorit = () => {
    console.log("delete Favorit", el._id);
    let favoritWAD = { F_workId: el._id };
    dispatch(deleteFWork(favoritWAD));
  };

  
  return (
    <div
      style={{
        width: "600px",
        height: "200px",
        backgroundColor: "#f8f9fa",
        margin:'20px',
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        boxShadow:'10px 10px 20px 1px'
      }}
    >
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="carouseledit"
      >
        {el && el.imageUrl.length > 0 ? (
          <Carousel>
            {el.imageUrl.map(
              (element, i) => 
                  <Carousel.Item key={i}>
                    <img
                      className="d-block w-100 responsive-img"
                      src={`uploads/${element}`}
                      alt="First slide"
                      style={{ height: "180px", borderRadius: "10%" }}
                    />
                  </Carousel.Item>
            )}
            
          </Carousel>
        ) : (
          <img
            className="d-block w-100"
            src="https://www.recruter.tn/wp-content/uploads/2019/05/talent-2.jpg"
            alt="First slide"
          />
        )}
      </div>
      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "20%",
            fontSize: "19px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          <h4>{el.titre ? el.titre : "titre"}</h4>
        </div>
        <div style={{ height: "20%" }}>
        <div style={{display:'flex',justifyContent:'space-around'}}>{el.typeJob ?
         el.typeJob.map((element,i)=>
         <p style={{backgroundColor:'#89ba16',color:'white',padding:'3px', marginTop:"5px",marginBottom:"3px",borderRadius:'5px', width:'auto'}} key={i} >{element}</p>) : []}</div> 
        </div>
        <div
          style={{
            height: "20%",
            display: "flex",
            flexDirection: "row",
            padding: "0px 10px 0px 5px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
            <FontAwesomeIcon
              color="gray"
              size="lg"
              className="btnicon"
              icon={faMapMarkerAlt}
            />
            <p style={{ marginLeft: "5px" }}>
              {el.adresse ? el.adresse : "adresse"}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", width: "40%" }}>
            <FontAwesomeIcon
              color="gray"
              size="lg"
              className="btnicon"
              icon={faPhoneAlt}
            />
            <p style={{ marginLeft: "5px" }}>{el.phone ? el.phone : "phone"}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "40%",
            padding: "5px",
          }}
        >
          <FontAwesomeIcon
            color="gray"
            size="lg"
            className="btnicon"
            icon={faAddressCard}
          />
          <p style={{}}>{el.description ? el.description : "description"}</p>
        </div>
      </div>
      <div
        style={{
          width: "5%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {user && user.F_Work.includes(el._id) ? (
          <button
            onClick={handelDeleteFavorit}
            style={{
              border: "none",
              backgroundColor: "#f8f9fa",
              marginLeft: "-5px",
            }}
          >
            {" "}
            <FontAwesomeIcon
              color={"orange"}
              size="lg"
              className="btnicon"
              icon={solidstar}
            />
          </button>
        ) : (
          <button
            onClick={handelAddFavorit}
            style={{
              border: "none",
              backgroundColor: "#f8f9fa",
              marginLeft: "-5px",
            }}
          >
            {" "}
            <FontAwesomeIcon
              color={"gray"}
              size="lg"
              className="btnicon"
              icon={regularstar}
            />
          </button>
        )}
        {user && user._id === el.Auth ? <EditWorkCard element={el} /> : null}
        {user && user._id === el.Auth ? (
          <button
            onClick={handelDelete}
            style={{
              backgroundColor: "#f8f9fa",
              marginTop: "10px",
              border: "none",
              marginLeft: "-4px",
            }}
          >
            <FontAwesomeIcon
              color="gray"
              className="btnicon"
              icon={faTrashAlt}
            />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default WorkCard;
