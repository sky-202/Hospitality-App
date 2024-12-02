const jwt = require("jsonwebtoken");
// const { secretKey } = require("../services/auth");
require('dotenv').config();


function authenticateToken(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    const secretKey = process.env.jwtSceretKey

  if (!token) {
    return res.status(401).json({ error: "Access Denied, No token provided" });
  }

  jwt.verify(token, "secretKey", (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid or expired token" });
    }

    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken,
};
