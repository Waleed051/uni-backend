const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "abc123", {
    expiresIn: "30d",
  });
};

exports.generateToken = generateToken;
