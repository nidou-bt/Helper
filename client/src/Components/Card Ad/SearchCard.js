import React from 'react'
import {useDispatch} from "react-redux";
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
import EditSearchCard from './EditSearchCard';
import { deleteSearchById } from '../../JS/actions/searchAd';

// ilawaj 3ala 5idma
const SearchCard = ({el}) => {
  const dispatch = useDispatch()
  const handelDelete=()=>{
    console.log("delete")
    dispatch(deleteSearchById(el._id))
  }
    return (
        <div style={{marginTop:"10px"}} >
      <div
        style={{
          width: "400px",
          height:'300px',
          backgroundColor: "#f8f9fa",
          margin: "10px auto",
          borderRadius: "10px",
          padding: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={el.imageUrl?`uploads/${el.imageUrl}` :"https://i.postimg.cc/BnzkC5LZ/pngwing-com-2.png"}
            height={130}
            width={130}
            style={{borderRadius:"5%"}}
            alt="imageUrl"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flexGrow: "1",
              marginLeft: "25px",
            }}
          >
            <span style={{ fontSize: "19px", fontWeight: "600" }}>
              {el.name} {el.LastName} name and last name
            </span>
            <span style={{ margin: "4px" }}>
              <FontAwesomeIcon
                color="gray"
                style={{ marginRight: "10px" }}
                size="lg"
                className="btnicon"
                icon={faMapMarkerAlt}
              />
              {el.adresse}
            </span>
            <span style={{ margin: "4px" }}>
              <FontAwesomeIcon
                color="gray"
                style={{ marginRight: "10px" }}
                size="lg"
                className="btnicon"
                icon={faPhoneAlt}
              />
              {el.phone}
            </span>
            <span style={{ margin: "4px" }}>
              <FontAwesomeIcon
                color="gray"
                style={{ marginRight: "10px" }}
                size="lg"
                className="btnicon"
                icon={faEnvelope}
              />
              nidhal@gmail.com
            </span>
          </div>
         <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'10px'}}> <FontAwesomeIcon
            color={true?"gray":"orange"}
            size="lg"
            className="btnicon"
            icon={true?regularstar:solidstar}
          />
          {true?<EditSearchCard element={el} />
          :null}
           {true?<button onClick={handelDelete} style={{backgroundColor: "#f8f9fa", border:'none'}}><FontAwesomeIcon
          color="gray"
          className="btnicon"
          icon={faTrashAlt}
        /></button>:null} 
          </div>
        </div>
        <span style={{ borderTop: "1px solid #555", marginTop: "10px" }}></span>
        <div style={{display:'flex',justifyContent:'space-around'}}>
          {el.typeJob.map((element,i)=>
          <p style={{backgroundColor:'#89ba16',color:'white',padding:'3px', marginTop:"5px",marginBottom:"3px",borderRadius:'5px'}}  key={i}>{element}</p>)}
          </div>
        <div style={{ display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px" }}>
          <FontAwesomeIcon
            color="gray"
            size="lg"
            className="btnicon"
            icon={faAddressCard}
          />
          <p className="pelip" style={{ marginLeft: "8px", fontSize: "14px",}}>
            {el.bio}
          </p>
        </div>
        
    </div>
    </div>
      
    )
}

export default SearchCard
