import UserController  from './controller';
import validation from './validation';
import validationHandler from '../../libs/validationHandler';
import authMiddleWare from '../../libs/routes/authMiddleWare';


const express = require('express')
const userRouter = new express.Router();



userRouter.route('/userLogin')
.post(validationHandler(validation.login),UserController.login,authMiddleWare('getUsers','all'))
// .get(AuthMiddleWare('trainer','read'),UserController.get)
export default userRouter;
