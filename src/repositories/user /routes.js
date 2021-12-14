import userRepository from "./userRepository";
import { seed } from "../../libs/seedData";
const express = require('express');
const routes = express.Router();
routes.route('/')
.post(seed,userRepository.create)
export default routes;