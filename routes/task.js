const express = require('express');
const taskController = require("../controllers/task");

const api = express.Router()

api.post("/task",taskController.createTask);

module.exports = api;