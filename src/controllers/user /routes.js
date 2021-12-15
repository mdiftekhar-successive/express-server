import UserController  from './controller';
import validation from './validation';
import validationHandler from '../../libs/validationHandler';
import AuthMiddleWare from '../../libs/routes/authMiddleWare';


const express = require('express')
const userRouter = new express.Router();



userRouter.route('/login')
.post(validationHandler(validation.login),UserController.login)
// .get(validationHandler(validation.get),UserController.get)
export default userRouter;
