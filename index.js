const mongoose = require('mongoose');
const urlMongoDb ='mongodb://localhost:27017/test'
const app = require("./app");
const port=3000;



mongoose.connect(urlMongoDb,(err,res ) =>{

    try{
        if(err){
            throw err;   
        }
        else{
            console.log("Conexion a DB correcta");
            app.listen(port, () => {
                console.log(
                    "Server Up on port"
                    )
            });
        }  
    }
    catch(error){
        console.error(error);
    }
});

