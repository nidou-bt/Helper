import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { logout } from "../../JS/actions/user";

const NavbarUser = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isAuth = useSelector(state => state.userReducer.isAuth);
  const dispatch = useDispatch()
  const handelLogout=()=>{
    dispatch(logout());
    handleClose();
  }
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div >
      
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#717073'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Helper
            <Link to="/" style={{textDecoration:'none',color:'white' ,marginLeft:"20px"}}>Home</Link>
            <Link to="/listad" style={{textDecoration:'none',color:'white' , marginLeft:"10px"}}>List Ads</Link>
          </Typography>
          {isAuth ? (
            <div>
              <Link to="/favoritad" style={{textDecoration:'none',color:'white' , marginLeft:"10px"}}>Favorit Ads</Link>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorEl)} onClose={handleClose} >
                <MenuItem onClick={handleClose}><Link to="/profil" style={{textDecoration:'none', marginLeft:"10px"}}>Profil</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/addad" style={{textDecoration:'none', marginLeft:"10px"}}>Add Ad</Link></MenuItem>
                <MenuItem onClick={handelLogout}><Link to="/" style={{textDecoration:'none', marginLeft:"10px"}}>Logout</Link></MenuItem>
              </Menu>
            </div>
          ):<div>
          <Link to="/login" style={{textDecoration:'none',color:'white' , marginLeft:"10px"}}>login</Link>
          <Link to="/register" style={{textDecoration:'none',color:'white' , marginLeft:"10px"}}>register</Link></div>}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
};

export default NavbarUser;
