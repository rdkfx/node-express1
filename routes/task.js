const express = require('express');
const taskController = require("../controllers/task");

const api = express.Router()

api.post("/task",taskController.createTask);
api.get("/task",taskController.getTask);

module.exports = api;