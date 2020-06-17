var express = require('express');
var router = express.Router();
const userRouter = require('./../routes/userRouter');
const loginRouter = require('./../routes/loginRouter');
/* GET home page. */
router.use('/user', userRouter);
router.use('/login', loginRouter);

module.exports = router;
