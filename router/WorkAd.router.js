const express = require("express");
const {
  getAllWorkAd,
  addnewWorkAd,
  getOneWorkById,
  getallWorkByAuthId,
  deleteOneWorkById,
  deleteManyWorkByAuth,
  updateOneWorkById,
} = require("../controllers/WorkAd.controllers");
const isAdmin = require("../middlewares/isAdmin");
const isAuth = require("../middlewares/isAuth");
const upload = require("../middlewares/upload");

const router = express.Router();
//test
router.get("/test", (req, res) => {
  res.send("test Work_Ad succ");
});
//CRUD
//get all work ad
router.get("/workads", getAllWorkAd);
//get one work ad by id
router.get("/getid/:id", isAuth, getOneWorkById);
//get all work ad by auth id
// for user we use token._id
router.get("/getauth", isAuth, getallWorkByAuthId);
//add one work ad by id
router.post("/add", isAuth,upload.array("WorkImg",5), addnewWorkAd);
//delete work ad by id
router.delete("/delete/:id", isAuth, deleteOneWorkById);
//delete many work ad by user id
router.delete("/deleteauth", isAuth,isAdmin ,deleteManyWorkByAuth);
//update one work ad by id
router.put("/update/:id", isAuth,upload.array("WorkImg",5), updateOneWorkById);




//export router
module.exports = router;
