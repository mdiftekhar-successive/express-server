import { traineeRouter } from "./controllers/trainee"
const express = require('express');
const router = new express.Router();
router.use('/',traineeRouter);

export default router;
