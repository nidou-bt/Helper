const Search_Ad = require("../models/Search_Ad");

// get all Search Ad
exports.getAllSearch = async (req, res) => {
  try {
    let listSearch = await Search_Ad.find({});
    res
      .status(200)
      .send({ msg: "get all the Search_Ads", Search_Ads: listSearch });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "can not get the list of Search_Ads" }] });
  }
};
//get one Search ad by id
exports.getOneSearchbyId = async (req, res) => {
  try {
    let findSearch = await Search_Ad.findById(req.params.id);
    if (!findSearch) {
      return res
        .status(400)
        .send({ errors: [{ msg: "no Search Ad with this id" }] });
    }
    res
      .status(200)
      .send({ msg: "get one Search Ad by id", SearchAd: findSearch });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not get the Search Ad" }] });
  }
};
//add one Search ad by id
exports.addNewSearchAd = async (req, res) => {
  try {
    let imageUrl = "";
    if (req.file) {
      imageUrl = req.file.filename;
    }
    //add new work ad by id_user:req.user_id
    const newSearchAd = new Search_Ad({
      ...req.body,
      Auth: req.user._id,
      name:req.user.name,
      email:req.user.email,
      imageUrl: imageUrl,
    });
    await newSearchAd.save();
    res
      .status(200)
      .send({ msg: "ADD search_ad to List", SearchAd: newSearchAd });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not save this Search Ad" }] });
  }
};
//delete work ad by id
exports.deleteOneSearchById = async (req, res) => {
  try {
    let findSearch = await Search_Ad.findById(req.params.id);
    if (!findSearch) {
      return res
        .status(400)
        .send({ errors: [{ msg: "no  Search Ad with this id" }] });
    }
    //verified id of user
    if (findSearch.Auth.toString() !== req.user._id.toString()&&req.user.role!==1) {
      return res
        .status(400)
        .send({
          errors: [{ msg: "not  Authorizat to delete this Search Ad" }],
        });
    }
    await Search_Ad.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "delete Search Ad successfull" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "delete the Search Ad fail" }] });
  }
};
//get all work id by auth id
exports.getSearchByAuthId = async (req, res) => {
  try {
    let listSearch = await Search_Ad.find({ Auth: req.user._id });
    res
      .status(200)
      .send({ msg: "get Search_Ad by Auth id", Search_Ads: listSearch });
  } catch (error) {
    res.status(400).send({
      errors: [{ msg: "can not get the list of the Search_Ads by Auth id" }],
    });
  }
};
//update one work ad by id
exports.updateOneSearchById = async (req, res) => {
  let findSearch = await Search_Ad.findById(req.params.id);
  try {
    //verified of Id
    if (!findSearch) {
      return res
        .status(400)
        .send({ errors: [{ msg: "no  Search Ad with this id" }] });
    }
    //verified id of user
    if (findSearch.Auth.toString() !== req.user._id.toString()) {
      return res
        .status(400)
        .send({
          errors: [{ msg: "not  Authorizat to update this Search Ad" }],
        });
    }
    //verified img
    let imageUrl = "";
    if (req.file) {
      imageUrl = req.file.filename;
    }else{
      imageUrl = findSearch.filename
    }
    //update
    let Sos = await Search_Ad.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body, imageUrl: imageUrl } }
    );

    if (Sos.modifiedCount) {
      return res.status(200).send({ msg: "updating Search Ad succ" });
    }
    res.status(400).send({ errors: [{ msg: "no update for Search Ad" }] });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "can not update this Search Ad" }] });
  }
};
//5idmit rafik
//uploadIImage
// exports.updateImage = async (req, res) => {
//   try {
//     let imageUrl = "";
//     if (req.file) {
//       imageUrl = req.file.filename;
//     }
//     const newSearchAd = new Search_Ad({
//       ...req.body,
//       Auth: req.user._id,
//       imageUrl: imageUrl,
//     });
//     await newSearchAd.save();
//     res
//       .status(200)
//       .send({ msg: "ADD search_ad to List", SearchAd: newSearchAd });
//   } catch (error) {
//     res.status(400).send({ errors: [{ msg: "can not save this Search Ad" }] });
//   }
// };
