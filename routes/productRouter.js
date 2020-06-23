const express = require('express');
const router = express.Router();
const productController = require('./../controllers/ProductController');
const CreateProductRequest = require('./../requests/CreateProductRequest'); //import validate
// const Authenticated = require('./../middlewares/Authenticated');    //import check login

router.get('/', productController.index);
router.post('/create', CreateProductRequest, productController.create);
router.get('/:id', productController.show);
router.put('/:id', productController.update);
router.delete('/:id', productController.destroy);

module.exports = router;