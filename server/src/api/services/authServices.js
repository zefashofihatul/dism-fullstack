require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authService = () => {
  const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  const compare = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
  };

  const verify = (token) => jwt.verify(token, process.env.JWT_SECRET);

  const generateToken = (payload) =>
    jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 360000,
    });

  return {
    encryptPassword,
    compare,
    verify,
    generateToken,
  };
};

module.exports = authService;
