const express = require('express');
const router = express.Router();
const userController = require('./../controllers/UserController');
const CreateUserRequest = require('./../requests/CreateUserRequest'); //import validate
const Authenticated = require('./../middlewares/Authenticated');    //import check login

router.get('/', Authenticated, userController.index);
router.post('/create', CreateUserRequest, userController.create);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);

module.exports = router;