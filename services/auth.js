const jwt = require("jsonwebtoken")

require('dotenv').config();

const secretKey = process.env.jwtSceretKey

function createToken(user){
    const payload = {
        id: user._id,
        email: user.email,
    }
    
    return jwt.sign(payload, "secretKey", {expiresIn: "1h"})
}

module.exports = {
    createToken,
    secretKey
}