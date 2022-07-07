const Task = require('../models/task');

function createTask(req,res) {

console.log("creando tarea");
console.log(req.body);
}

module.exports ={

    createTask,
}