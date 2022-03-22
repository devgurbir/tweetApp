const jwt = require('jsonwebtoken')
require('dotenv').config();

const generateToken = (user) => {
    return jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    })
}

module.exports = generateToken