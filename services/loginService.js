const { jsonData } = require('./../helpers/Helper');
const StatusCode = require('./../consts/StatusCode');
const jwt = require('jsonwebtoken');
const models = require('./../models/index');

const User = models.User;

require('dotenv/config');

class LoginService {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email: email } });
            if(user && user.comparePassword(password)){
                const payload = { id: user.id, fisrtName: user.fisrtName, lastName: user.lastName, email: user.email };
                const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '7d'});
                return res.json(jsonData(StatusCode.OK, 'Login Success', token))
            }
            return res.json(jsonData(StatusCode.NOT_FOUND, 'Email or Password incorrect'))
        } catch (err) {
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR, 'Server Error'))
        }
    }
}

module.exports = LoginService;