const ProductService = require('./../services/productService');

class ProductController{
    constructor(){}

    static async index(req, res) {
        let data = await ProductService.index(req, res);
        return data;
    };

    static async create(req, res) {
        let data = await ProductService.create(req, res);
        return data;
    };

    static async show(req, res){
        let data = await ProductService.show(req, res);
        return data;
    };

    static async update(req, res){
        let data = await ProductService.update(req, res);
        return data;
    };

    static async destroy(req, res){
        let data = await ProductService.destroy(req, res);
        return data;
    }
}

module.exports = ProductController;