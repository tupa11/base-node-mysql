const LoginService = require('./../services/loginService');

class LoginController{
    static async login(req, res) {
        let data = await LoginService.login(req, res);
        return data;
    }
}

module.exports = LoginController;