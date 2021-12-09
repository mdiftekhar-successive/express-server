import { traineeRouter } from "./controllers/trainee"
import { userRouter } from "./controllers/user ";
const express = require('express');
const router = new express.Router();
router.use('/trainee',traineeRouter);
router.use('/',userRouter);
export default router;
