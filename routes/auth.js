const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT = 11;
const SECRET = 'there are no jobs anyway';

const hash = async (password) => {
  return await bcrypt.hash(password, SALT)
};

const encode = async (data) => {
  return jwt.sign(data, SECRET)
};

const compare = async (password, password_digest) => {
  const isAuthenticated = await bcrypt.compare(password, password_digest)
  return isAuthenticated
};

const verify = async (token) => {
  return jwt.verify(token, SECRET)
};

const restrict = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const data = await verify(token);
    res.locals.user = data;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).send('Invalid Creds');
  }
}

module.exports = {
  hash,
  encode,
  compare,
  verify,
  restrict
};
