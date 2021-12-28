const User = require("../models/User");

//add from favorit Work Ad
exports.updateFavoritWork = async (req, res) => {
  try {
    let favorit = req.user.F_Work;
    const { F_workId } = req.body;
    favorit.push(F_workId);
    let F = await User.updateOne(
      { _id: req.user.id },
      { $set: { F_Work: favorit } }
    );
    if (F.modifiedCount) {
      return res.status(200).send({ msg: "updating fav succ" });
    }
    res.status(200).send({ msg: "no update favorit " });
  } catch (error) {
    return res
      .status(401)
      .send({ errors: [{ msg: "false operation favorit Work Ad" }] });
  }
};
//delete from favorit Work Ad
exports.updateNoFavoritWork = async (req, res) => {
  try {
    let favorit = req.user.F_Work;

    const { F_workId } = req.body;

    let F_Work = favorit.filter((el) => el != F_workId);
    let F = await User.updateOne(
      { _id: req.user.id },
      { $set: { F_Work: F_Work } }
    );
    if (F.modifiedCount) {
      return res.status(200).send({ msg: "updating fav succ" });
    }
    res.status(200).send({ msg: "no update favorit " });
  } catch (error) {
    return res
      .status(401)
      .send({ errors: [{ msg: "false operation favorit Work Ad" }] });
  }
};
//add from favorit Search Ad
exports.updateFavoritSearch = async (req, res) => {
  try {
    let favorit = req.user.F_Search;
    const { F_searchId } = req.body;
    favorit.push(F_searchId);
    let F = await User.updateOne(
      { _id: req.user.id },
      { $set: { F_Search: favorit } }
    );
    if (F.modifiedCount) {
      return res.status(200).send({ msg: "updating fav succ" });
    }
    res.status(200).send({ msg: "no update favorit " });
  } catch (error) {
    return res
      .status(401)
      .send({ errors: [{ msg: "false operation favorit Work Ad" }] });
  }
};
//delete from favorit Search Ad
exports.updateNoFavoritSearch = async (req, res) => {
  try {
    let favorit = req.user.F_Search;
    const { F_searchId } = req.body;
    let F_Search = favorit.filter((el) => el != F_searchId);
    let F = await User.updateOne(
      { _id: req.user.id },
      { $set: { F_Search: F_Search } }
    );
    if (F.modifiedCount) {
      return res.status(200).send({ msg: "updating fav succ" });
    }
    res.status(200).send({ msg: "no update favorit " });
  } catch (error) {
    return res
      .status(401)
      .send({ errors: [{ msg: "false operation favorit Work Ad" }] });
  }
};
