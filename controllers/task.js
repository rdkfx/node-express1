const Task = require('../models/task');

 async function createTask(req,res) {

    const task = new Task();
    const params=req.body;

    task.title=params.title;
    task.description=params.description;

    try{
        const task_store= await task.save();

        if(!task_store)
        {
            res.status(400).send({msg: "tarea no guardada"});
        }
        else{
            res.status(200).send({task: task_store});
        }

    }catch(error){
        res.status(500).send(error);

    }



}

async function getTask(req,res){

    try{
        const tasks= await Task.find().sort({create_at: -1});

        if(!tasks)
        {
            res.status(400).send({msg: "error de tarea "});
        }
        else{
            res.status(200).send({tasks});
        }

    }catch(error){
        res.status(500).send(error);

    }
}
module.exports ={

    createTask,getTask,
}