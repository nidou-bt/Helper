import React from 'react'
import Loading from './Loading';
import NavbarAdmin from './Navbar/NavbarAdmin';
import NavbarUser from './Navbar/NavbarUser';
import {useSelector } from "react-redux";
const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const isLoad = useSelector((state) => state.userReducer.isLoad);

    return (
        <div> 
          {isLoad?<Loading/>:user&&user.role==1?<NavbarAdmin/>:<NavbarUser/>}
         
        </div>
    )
}

export default Navbar
