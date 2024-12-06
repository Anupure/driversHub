const JWT_USER_SEC = require('../config');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
function auth (req, res, next){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_USER_SEC);
    if(decoded){
        req.userId = decoded.id;
        next();
    }
    else{
        res.status(403).json({
            message: "Request forbidden"
        })
    }
}