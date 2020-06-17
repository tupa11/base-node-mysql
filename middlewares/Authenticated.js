const jwt = require('jsonwebtoken');
const models = require('./../models/index');
const {jsonData} = require('./../helpers/Helper');
const StatusCode = require('./../consts/StatusCode');

const User = models.User;
require('dotenv/config');

module.exports = (req, res, next) => {
    const token = req.headers.authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (payload) {
            const user = await User.findOne({where: {id: payload.id}});
            if(user){
                req.user = user;
                return next();
            }
        }
        res.json(jsonData(StatusCode.UNAUTHORIZED, "Token không hợp lệ"));
    })
}