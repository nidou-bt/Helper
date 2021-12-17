const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.Register = async (req, res) => {
  try {
    const { email, password } = req.body;
    //verifie email is unique
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "there is alredy compte with this email" }] });
    }
    //hashage the password
    const saltRound = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRound);
    const newUser = new User({ ...req.body });
    //create token
    // const token = jwt.sign(
    //   {
    //     _id: newUser._id,
        
    //   },
    //   process.env.SECRET_KEY,
    //   { expiresIn: "3h" }
    // );
    //save user
    newUser.password = hashedPassword;
    await newUser.save();
    res.status(200).send({ msg: "add succ", user: newUser });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not register the user" }] });
  }
};

exports.Login = async (req, res) => {
  try {
    //email+password
    const { email, password } = req.body;
    //check email
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(400).send({ errors: [{ msg: "Bad Credantial" }] });
    }
    //check password
    const testPassword = bcrypt.compareSync(password, findUser.password);
    if (!testPassword) {
      return res.status(400).send({ errors: [{ msg: "Bad Credantial" }] });
    }
    // create token
    const token = jwt.sign(
      {
        _id: findUser._id,
        role: findUser.role,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    // succ login
    return res.status(200).send({ msg: "login succ", user: findUser, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "can not login this user" }] });
  }
};
