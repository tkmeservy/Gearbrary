const express = require("express");
const mongoose=require("mongoose");
const bodyParser= require("body-parser");
const  tripRouter=require("./routes/trip.js");
const itemRouter=require("./routes/item.js")
const cors=require("cors")


const app=express();
app.use(bodyParser.json());
app.use(cors());

app.use("/trip", tripRouter);
app.use("/item", itemRouter)




mongoose.connect("mongodb://localhost:27017/gearbrary", ()=>{
    console.log("connected to mongodb")
})

app.listen(8080, ()=>{
    console.log("connected to port 8080")
})