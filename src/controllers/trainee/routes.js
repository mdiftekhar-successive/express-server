import TraineeController  from'./controller';
const express = require('express');
const traineeRouter = new express.Router();
traineeRouter.use(TraineeController.getRoute());
traineeRouter.use(TraineeController.postRoute());
traineeRouter.use(TraineeController.putRoute());
traineeRouter.use(TraineeController.deleteRoute());

export default traineeRouter;
