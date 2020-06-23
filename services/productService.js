const models = require("./../models/index");
const { jsonData } = require('./../helpers/Helper');
const StatusCode = require('./../consts/StatusCode');
const DefaultContant = require('./../consts/DefaultContant');
const { Op } = require('sequelize');

const Product = models.Product;

class ProductService {
    static async index(req, res) {
        let limit = DefaultContant.PAGINATE;
        let offset = req.query.page && req.query.page > 0 ? (req.query.page - 1) * limit : 0;
        let products = await Product.findAll({
            limit: limit,
            offset: offset,
        });
        return res.json(jsonData(StatusCode.OK, 'Success', products));
    }

    static async create(req, res) {
        try {
            let product = await Product.create(req.body);
            return res.json(jsonData(StatusCode.OK, 'Create Success', product));
        } catch (err) {
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR, 'Server Error'))
        }
    }

    static async show(req, res) {
        try {
            let product = await Product.findByPk(req.params.id);
            return res.json(jsonData(StatusCode.OK, 'Success', product));
        } catch (err) {
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR, 'Server Error'))
        }
    }

    static async update(req, res) {
        try {
            let product = await Product.findByPk(req.params.id);
            if(product){
                product.update({
                    name: req.body.name ? req.body.name : product.name,
                    price: req.body.price ? req.body.price : product.price,
                    status: req.body.status ? req.body.status : product.status,
                });
                return res.json(jsonData(StatusCode.OK, 'Update Success', product))
            }
            return res.json(jsonData(StatusCode.NOT_FOUND, 'Not Found Product'))
        } catch (err) {
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR, 'Server Error'))
        }
    }

    static async destroy(req, res) {
        try {
            let product = await Product.findByPk(req.params.id);
            if(product){
                product.destroy();
                return res.json(jsonData(StatusCode.OK, 'Delete Success'))
            }
            return res.json(jsonData(StatusCode.NOT_FOUND, 'Not Found Product'))
        } catch (err) {
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR, 'Server Error'))
        }
    }
}

module.exports = ProductService;