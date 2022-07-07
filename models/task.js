const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({

        title:{
            type: String,
            require: true
        },
        description:{
            type: String,
            require: true
        },
        completed:{
            type: Boolean,
            require: true,
            default: false
        },
        create_at:{
            type: Date,
            require: true,
            default: Date.now
        }

});

module.exports = mongoose.model("Task", taskSchema);