var express = require('express');
var router = express.Router();
const userRouter = require('./../routes/userRouter');
const loginRouter = require('./../routes/loginRouter');
const productRouter = require('./../routes/productRouter');
/* GET home page. */
router.use('/user', userRouter);
router.use('/login', loginRouter);
router.use('/product', productRouter);

module.exports = router;
