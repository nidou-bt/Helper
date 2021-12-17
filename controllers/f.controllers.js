const User = require("../models/User");

//add from favorit Work Ad
exports.updateFavoritWork = async (req, res) => {
  try {
    let favorit = req.user.F_job;
    const { F_workId } = req.body;
    favorit.push(F_workId);
    let F = await User.updateOne(
      { _id: req.user.id },
      { $set: { F_job: favorit } }
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
    let favorit = req.user.F_job;

    const { F_workId } = req.body;

    let F_job = favorit.filter((el) => el != F_workId);
    let F = await User.updateOne(
      { _id: req.user.id },
      { $set: { F_job: F_job } }
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
    let favorit = req.user.F_search;
    const { F_searchId } = req.body;
    favorit.push(F_searchId);
    let F = await User.updateOne(
      { _id: req.user.id },
      { $set: { F_search: favorit } }
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
    let favorit = req.user.F_search;
    const { F_searchId } = req.body;
    let F_search = favorit.filter((el) => el != F_searchId);
    let F = await User.updateOne(
      { _id: req.user.id },
      { $set: { F_search: F_search } }
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
