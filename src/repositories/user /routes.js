import userRepository from "./userRepository";
const express = require('express');
const routes = express.Router();
routes.route('/create')
.post(userRepository.create)
routes.route('/:id')
.get(userRepository.get)
.delete(userRepository.delete)
routes.route('/:userId')
.put(userRepository.update)

export default routes;
