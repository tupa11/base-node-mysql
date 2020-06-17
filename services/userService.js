const models = require("./../models/index");
const { jsonData } = require('./../helpers/Helper');
const StatusCode = require('./../consts/StatusCode');
const DefaultContant = require('./../consts/DefaultContant');
const { Op } = require('sequelize');

const User = models.User;

class UserService {
    static async index(req, res) {
        let searchFirstName = { [Op.like]: '%' + (req.query.searchFirstName ? req.query.searchFirstName : "") + '%' };
        let limit = DefaultContant.PAGINATE;
        let offset = req.query.page && req.query.page > 0 ? (req.query.page - 1) * limit : 0;
        let users = await User.findAll({
            where: {
                firstName: searchFirstName,
            },
            include: 'company',
            limit: limit,
            offset: offset,
        });
        return res.json(jsonData(StatusCode.OK, 'Success', users));
    }

    static async create(req, res) {
        try {
            let user = await User.create(req.body);
            return res.json(jsonData(StatusCode.OK, 'Create Success', user));
        } catch (err) {
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR, 'Server Error'))
        }
    }

    static async show(req, res) {
        try {
            let user = await User.findByPk(req.params.id);
            return res.json(jsonData(StatusCode.OK, 'Success', user));
        } catch (err) {
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR, 'Server Error'))
        }
    }

    static async update(req, res) {
        try {
            let user = await User.findByPk(req.params.id);
            if(user){
                user.update({
                    firstName: req.body.firstName ? req.body.firstName : user.firstName,
                    lastName: req.body.lastName ? req.body.lastName : user.lastName,
                    email: req.body.email ? req.body.email : user.email,
                    password: req.body.password ? req.body.password : user.password,
                    gender: req.body.gender ? req.body.gender : user.gender,
                });
                return res.json(jsonData(StatusCode.OK, 'Update Success', user))
            }
            return res.json(jsonData(StatusCode.NOT_FOUND, 'Not Found User'))
        } catch (err) {
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR, 'Server Error'))
        }
    }

    static async destroy(req, res) {
        try {
            let user = await User.findByPk(req.params.id);
            if(user){
                user.destroy();
                return res.json(jsonData(StatusCode.OK, 'Delete Success'))
            }
            return res.json(jsonData(StatusCode.NOT_FOUND, 'Not Found User'))
        } catch (err) {
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR, 'Server Error'))
        }
    }
}

module.exports = UserService;