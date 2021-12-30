const Work_Ad = require("../models/Work_Ad");

//get all work_ad
exports.getAllWorkAd = async (req, res) => {
  try {
    let listWork = await Work_Ad.find({});
    res.status(200).send({ msg: "get all the Work_Ads", Work_Ads: listWork });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "can not get the list of Work_Ads" }] });
  }
};
//add work_ad
exports.addnewWorkAd = async (req, res) => {
  try {
    let imageUrl =[];
    if (req.files) {
      // imageUrl = req.file.filename;
      imageUrl = req.files.map(el=>el.filename);
    }
    //add new work ad by id_user:req.user_id
    const newWorkAd = new Work_Ad({
      ...req.body,
      Auth: req.user._id,
      name:req.user.name,
      email:req.user.email,
      imageUrl: imageUrl,
    });
    await newWorkAd.save();
    res.status(200).send({ msg: "ADD work_ad to List", WorkAd: newWorkAd });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not save this Work Ad" }] });
  }
};
//get one work ad by id
exports.getOneWorkById = async (req, res) => {
  try {
    let findWork = await Work_Ad.findById(req.params.id);
    //succ get
    res.status(200).send({ msg: "get one Work Ad by id", WorkAd: findWork });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get the Work Ad" }] });
  }
};
//get all work id by auth id
exports.getallWorkByAuthId = async (req, res) => {
  try {
    let listWork = await Work_Ad.find({ Auth: req.user._id });
    res
      .status(200)
      .send({ msg: "get all the Work_Ads by Auth id", Work_Ads: listWork });
  } catch (error) {
    res.status(400).send({
      errors: [{ msg: "can not get the list of the Work_Ads by Auth id" }],
    });
  }
};
//delete work ad by id
exports.deleteOneWorkById = async (req, res) => {
  try {
    //verified of id
    let findWork = await Work_Ad.findById(req.params.id);
    if (!findWork) {
      return res
        .status(400)
        .send({ errors: [{ msg: "no  Work Ad with this id" }] });
    }
    //verified id of user
    if (findWork.Auth.toString() !== req.user._id.toString()&&req.user.role!==1) {
      return res
        .status(400)
        .send({ errors: [{ msg: "no  Authorizat to delete this Work Ad" }] });
    }
    await Work_Ad.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "delete Work Ad successfull" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "delete the Work Ad fail" }] });
  }
};
//delete many work ad by user id: Auth
exports.deleteManyWorkByAuth = async (req, res) => {
  try {
    await Work_Ad.deleteMany({ Auth: req.user._id });
    res.status(200).send({ msg: "delete all Work Ad by Auth succ" });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "delete all Work Ad by Auth fail" }] });
  }
};
//update one work ad by id
exports.updateOneWorkById = async (req, res) => {
  try {
    let imageUrl = [];
    //verified of Id
    let findWork = await Work_Ad.findById(req.params.id);
    //verified img
    if (req.files.length === 0) {
       imageUrl=findWork.imageUrl
    }else{
      imageUrl = req.files.map(el=>el.filename);
    }
    if (!findWork) {
      return res
        .status(400)
        .send({ errors: [{ msg: "no  Work Ad with this id" }] });
    }
    //verified id of user

    if (findWork.Auth.toString() !== req.user._id.toString()) {
      return res
        .status(400)
        .send({ errors: [{ msg: "not  Authorizat to update this Work Ad" }] });
    }
    //update
    let Wow = await Work_Ad.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body, imageUrl: imageUrl } }
    );
    // verified update
    if (Wow.modifiedCount) {
      return res.status(200).send({ msg: "updating Work Ad succ" });
    }
    res.status(400).send({ errors: [{ msg: "no update for Work Ad" }] });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not update this Work Ad" }] });
  }
};
