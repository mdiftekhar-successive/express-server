import TraineeController  from'./controller';
import validation from './validation';
import validationHandler from '../../libs/validationHandler';
const express = require('express');
const traineeRouter = new express.Router();
traineeRouter.route('/')
.post(validationHandler(validation.create),TraineeController.create)
// .get(validationHandler(validation.get),TraineeController.get)
// .put(validationHandler(validation.update),TraineeController.update)
// .delete(validationHandler(validation.delete),TraineeController.delete)


// traineeRouter.use(TraineeController.postRoute());
// traineeRouter.use(TraineeController.putRoute());
// traineeRouter.use(TraineeController.deleteRoute());

export default traineeRouter;
