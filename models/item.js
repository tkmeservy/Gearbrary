const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema= new Schema({

    name: {
        type: String, 
        required: true
    },
    brand: String,
    weight: Number,
    description: String,
    
    
})


module.exports = mongoose.model("Item", itemSchema)