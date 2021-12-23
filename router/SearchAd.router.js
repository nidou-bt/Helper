const express = require("express");
const {
  getAllSearch,
  addNewSearchAd,
  getOneSearchbyId,
  deleteOneSearchById,
  getSearchByAuthId,
  updateOneSearchById,
  updateImage,
} = require("../controllers/SearchAd.controllers");
const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/upload");

const router = express.Router();
//test
router.get("/test", (req, res) => {
  res.send("test Search_Ad succ");
});
//CRUD
//get all Search ad
router.get("/searchads",getAllSearch);
//get one Search ad by id
router.get("/getid/:id", getOneSearchbyId);
//get all Search id by auth id
// for user we user token._id
router.get("/getauth", isAuth, getSearchByAuthId);
//add one Search ad by id
router.post("/add", isAuth, upload.single("SearchImg"), addNewSearchAd);
//delete Search ad by id
router.delete("/delete/:id", isAuth, deleteOneSearchById);
//update one Search ad by id
router.put("/update/:id", isAuth, upload.single("SearchImg"), updateOneSearchById);

//export router
module.exports = router;
