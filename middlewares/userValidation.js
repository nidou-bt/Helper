const { check, validationResult } = require("express-validator");

exports.registerValidation = () => [
  check("email", "email is required").isEmail(),
  check("password", "password length min is 6").isLength({ min: 6 }),
  check("name", "name is required").notEmpty(),
];

exports.loginValidation = () => [
  check("email", "email is required").isEmail(),
  check("password", "password length min is 6").isLength({ min: 6 }),
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
