const express=require("express");
const itemRouter = express.Router();
const itemModel= require("../models/item.js");

itemRouter.route("/")
    .post((req, res)=>{
        let newItem = new itemModel(req.body);
        newItem.save((err, savedItem)=>{
            if (err){
                console.error(err);
            } else{
                res.send(savedItem)
            }
        })
    })
    .get((req, res)=>{
        itemModel.find(req.query, (err, foundItems)=>{
            if (err){
                console.error(err);
            } else {
                res.send(foundItems);
            }
        })
    })
itemRouter.route("/:id")
    .get((req,res)=>{
        let {id}=req.params;
        itemModel.findOne({_id:id},(err, foundItem)=>{
            if(err){
                console.error(err);
            } else {
                res.send(foundItem);
            }
        })
    })
    .delete((req, res)=>{
        let {id}=req.params;
        itemModel.findByIdAndRemove(id, (err, removedItem)=>{
            if (err){
                console.error(err)
            }else{
                res.send(removedItem)
            }
        })
    })
    .put((req, res)=>{
        let {id}=req.params;
        itemModel.findByIdAndUpdate(id, req.body, {new:true}, (err, updatedItem)=>{
            if(err){
                console.error(err)
            } else {
                res.send(updatedItem)
            }
        })
    })

module.exports=itemRouter