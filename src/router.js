import { traineeRouter } from "./controllers/trainee"
const express = require('express');
const router = new express.Router();
router.use('/trainee',traineeRouter);
export default router;
