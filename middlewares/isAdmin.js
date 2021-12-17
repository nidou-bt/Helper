const jwt = require("jsonwebtoken");
const isAdmin = async (req, res, next) => {
  if (req.user.role == 0) {
    return res.status(403).send({ errors: [{ msg: "Not Allowed to access" }] });
  }
  next();
};
module.exports = isAdmin;
