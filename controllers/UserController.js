const UserService = require('./../services/userService');

class UserController{
    constructor(){}

    static async index(req, res) {
        let data = await UserService.index(req, res);
        return data;
    };

    static async create(req, res) {
        let data = await UserService.create(req, res);
        return data;
    };

    static async show(req, res){
        let data = await UserService.show(req, res);
        return data;
    };

    static async update(req, res){
        let data = await UserService.update(req, res);
        return data;
    };

    static async destroy(req, res){
        let data = await UserService.destroy(req, res);
        return data;
    }
}

module.exports = UserController;