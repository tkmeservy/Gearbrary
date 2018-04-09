const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema= new Schema({
    destination:{
        type: String, 
        required: true
    },
    days:{
        type: String, 
        required: true
    }, 
    tripType: String,
    items:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Item"
    }]
})

module.exports=mongoose.model("Trip", tripSchema)