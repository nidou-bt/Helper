import React, { useState } from "react";
import MyAdSearch from "../Components/Profile/MyAdSearch";
import MyAdsWorks from "../Components/Profile/MyAdsWorks";
import Update from "../Components/Profile/Update";
import { useSelector } from "react-redux";
import Loading from "../Components/Loading";
import ListeUser from "../Components/Profile/ListeUser";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isLoad = useSelector((state) => state.userReducer.isLoad);
  const [list, setList] = useState(true)
  return (
    <div style={{minHeight:'500px'}}>
      {isLoad ? 
        <Loading />:
      user && user.role === 1 ? 
        <ListeUser />
      :user? (
        <div>
          <div style={{display: "flex",
             justifyContent:'center', marginTop:'20px'}}>
          <div>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
          </div>
          <div><Update  /></div>
          
          </div>
          <div style={{display:'flex', justifyContent:'center', width:'50%', marginLeft:'auto', marginRight:'auto',marginTop:'20px' ,height:'80px'}}> 
                <h4 style={{marginRight:'20px'}}>List of Helpers</h4>
                <label className="switch">
                <input type="checkbox" defaultChecked onClick={()=>setList(!list)} />
                <span className="slider round" />
                </label>
                <h4 style={{marginLeft:'20px'}} >List of Researchers</h4>
          </div>
          {
            list?<MyAdSearch />:<MyAdsWorks />
          }
          
          
        </div>
      ):null}
    </div>
  );
};

export default Profile;
