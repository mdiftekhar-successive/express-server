import userRepository from "./userRepository";
import { seed } from "../../libs/seedData";
const express = require('express');
const routes = express.Router();
routes.route('/')
.post(seed,userRepository.create)
routes.route('/id=:id')
.get(userRepository.get)
.put(userRepository.update)
.delete(userRepository.delete)
export default routes;
