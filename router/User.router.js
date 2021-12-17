const express = require("express");
const { updateFavoritWork, updateNoFavoritWork, updateFavoritSearch, updateNoFavoritSearch } = require("../controllers/f.controllers");
const { Register, Login } = require("../controllers/isAuth.controllers");
const {
  getallUser,
  getUserByName,
  deleteUserById,
  getoneUserById,
  updateoneUserById,
} = require("../controllers/user.controllers");

const isAdmin = require("../middlewares/isAdmin");
const isAuth = require("../middlewares/isAuth");
const {
  registerValidation,
  validation,
  loginValidation,
} = require("../middlewares/userValidation");
const router = express.Router();
//test
router.get("/test", (req, res) => {
  res.send("test succ");
});
//register
router.post("/register", registerValidation(), validation, Register);
//login
router.post("/login", loginValidation(), validation, Login);
//get all users
router.get("/users", isAuth,isAdmin, getallUser);
//get user by id
router.get("/getid/:id", isAuth, getoneUserById);
//get user by name
router.get("/getname", isAuth,isAdmin, getUserByName);
//delete user by id
// delete all the Work / Search Ads too
router.delete("/delete/:id", isAuth, isAdmin,deleteUserById);
//update user by id
router.put("/update/:id", isAuth, updateoneUserById);
//update favorit Work_Ad by id
router.put("/work/favorit",isAuth,updateFavoritWork)
//delete favorit work_Ad by id
router.put("/work/nofavorit",isAuth,updateNoFavoritWork)
//add favorit Search Ad
router.put("/search/favorit",isAuth,updateFavoritSearch)
//delete favorit search_Ad by id
router.put("/search/nofavorit",isAuth,updateNoFavoritSearch)
// current
router.get("/current",isAuth,(req,res)=>{
  res.send({msg:"current", user:req.user})
})

//export router
module.exports = router;
