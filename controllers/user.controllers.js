const Search_Ad = require("../models/Search_Ad");
const User = require("../models/User");
const Work_Ad = require("../models/Work_Ad");

//CRUD
//get all user
exports.getallUser = async (req, res) => {
  try {
    let listUser = await User.find({ role: "0" });
    res.status(200).send({ msg: "get all the users", Users: listUser });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "can not get the list of users" }] });
  }
};
// get one user by id
exports.getoneUserById = async (req, res) => {
  try {
    let findUser = await User.findById(req.params.id);
    //succ get
    res.status(200).send({ msg: "get one user by id", user: findUser });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get the user" }] });
  }
};
// get one user by name
exports.getUserByName = async (req, res) => {
  try {
    const { name } = req.body;
    let findUser = await User.find({ name });
    // user not found
    if (!findUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "no user with this name" }] });
    }
    //succ get
    res.status(200).send({ msg: "get user by name", user: findUser });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get the user" }] });
  }
};
//delete one user by id
exports.deleteoneUserById = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "delete user successfull" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "delete the user fail" }] });
  }
};
//update one user by id
exports.updateoneUserById = async (req, res) => {
  try {
    let U = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    if (U.modifiedCount) {
      return res.status(200).send({ msg: "updating succ" });
    }
    res.status(400).send({ errors: [{ msg: "no update" }] });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not update the user" }] });
  }
};

// delete one by id
// delete all the Work / Search Ads too
exports.deleteUserById = async (req, res) => {
  try {
    
    let findUser= await User.findById({ _id: req.params.id})
    if(!findUser){
      return res.status(400).send({errors: [{ msg: "there is no user with this id" }]})
    }
    await Work_Ad.deleteMany({Auth:req.params.id});
    await Search_Ad.deleteMany({Auth:req.params.id});
    await User.deleteOne({ _id: req.params.id });
    res.status(200).send({ errors: [{ msg: "delete user success" }]});
  } catch (error) {
    res.status(400).send({errors: [{ msg: "can not delete the user" }]});
  }
};
