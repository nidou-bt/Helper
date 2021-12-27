import React from 'react'
import ImageGallery from 'react-image-gallery';
import "./Card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faMapMarkerAlt,
  faStar as solidstar,
  faPhoneAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as regularstar
} from "@fortawesome/free-regular-svg-icons";
import EditWorkCard from './EditWorkCard';
const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';
const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
      originalHeight:'auto',
      originalWidth:'150px',
      thumbnailHeight:'50px',
      thumbnailWidth:'50px'
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
      originalHeight:'auto',
      originalWidth:'150px',
      thumbnailHeight:'50px',
      thumbnailWidth:'50px'
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
      originalHeight:'auto',
      originalWidth:'150px',
      thumbnailHeight:'50px',
      thumbnailWidth:'50px'
    },
  ];
const handelDelete=()=>{
  console.log("delete")
}
// ilawaj 3ala 5adam
const WorkCard = ({el}) => {
    return (
        <div style={{
            width: "600px",
          height:'250px',
          backgroundColor: "yellow",
          margin: "10px auto",
          borderRadius: "10px",
          padding: "15px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }} >
            <div style={{
              width:"30%",
          display: "flex",
          backgroundColor:"green",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
                <p>image</p>
            </div>
            <div style={{
              width:"60%",
              backgroundColor:"blue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <div style={{height:'20%', }} ><p>{el.titre?el.titre:"titre"}</p></div>
          {/* <div style={{height:'15%'}}><p>{el.typeJob?el.typeJob:[]}</p></div> */}
          <div style={{height:'15%'}}><p>{el.adresse?el.adresse:"adresse"} </p></div>
          <div style={{height:'50%'}}><p>{el.description?el.description:"description"}</p></div>
            </div>
            <div style={{
              width:"5%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}><FontAwesomeIcon
        color={true?"gray":"orange"}
        size="lg"
        className="btnicon"
        icon={true?regularstar:solidstar}
      />
      <EditWorkCard element={el} />
                <button onClick={handelDelete} style={{backgroundColor: "#f8f9fa", border:'none'}}><FontAwesomeIcon
          color="gray"
          className="btnicon"
          icon={faTrashAlt}
        /></button>
                
            </div>
        </div>
    )
}

export default WorkCard
