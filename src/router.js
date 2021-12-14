import { traineeRouter } from "./controllers/trainee"
import { userRouter } from "./controllers/user ";
import routes from "./repositories/user /routes";
const express = require('express');
const router = new express.Router();
router.use('/trainee',traineeRouter);
router.use('/',userRouter);
router.use('/user',routes);
export default router;
