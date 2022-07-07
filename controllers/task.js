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

async function getTasks(req,res){

    try{
        const tasks= await Task.find({completed: false}).sort({create_at: -1});

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

async function getTask(req,res){

    const id_task = req.params.id
    console.log(`llamando a getTask ${id_task}`);
    
    try{
        const task = await Task.findById(id_task);
        if(!task)
        {
            res.status(400).send("Id no encontrado");
        }
        else{
            res.status(200).send(task);
        }


    }catch(error){
        res.status(500).send(error);
    }

}

async function updateTask(req,res){

    const id_task = req.params.id;
    const params = req.body;
    console.log(id_task);
    console.log(params);

    try{
        const task = await Task.findByIdAndUpdate(id_task, params);
        if(!task){
            res.status(400).send({msg: "no se ha podido actualizar lar tarea"});
        }
        else{
            res.status(200).send("Actualizacion completada");
        }

    }catch(error){
        res.status(500).send(error)
    }



}

async function deleteTask(req,res){

    const id_task = req.params.id;
    

    try{
        const task = await Task.findByIdAndDelete(id_task)
        
        if(!task){
            res.status(400).send({msg: "no se ha podido borrar lar tarea"});
        }
        else{
            res.status(200).send("borrado completada");
        }

    }catch(error){
        res.status(500).send(error)
    }



}
module.exports ={

    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
}