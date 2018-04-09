const express = require("express");
const tripRouter = express.Router();
const tripModel = require("../models/trip.js");

tripRouter.route("/")
    .post((req, res) => {
        let newTrip = new tripModel(req.body);
        newTrip.save((err, savedTrip) => {
            if (err) {
                console.error(err);
            } else {
                res.send(savedTrip);
            }
        })
    })
    .get((req, res) => {
        tripModel.find(req.query, (err, foundTrip) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundTrip);
            }
        })
    })
tripRouter.route("/:id")
    .get((req, res) => {
        let { id } = req.params;
        tripModel.findOne({ _id: id }, (err, foundTrip) => {
            if (err) {
                console.error(err);
            } else {
                res.send(foundTrip);
            }
        })
    })
    .delete((req, res) => {
        let { id } = req.params;
        tripModel.findByIdAndRemove(id, (err, removedTrip) => {
            if (err) {
                console.error(err);
            } else {
                res.send(removedTrip)
            }
        })
    })
    .put((req, res) => {
        let { id } = req.params;
        tripModel.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedTrip) => {
            if (err) {
                console.error(err);
            } else {
                res.send(updatedTrip)
            }
        })
    })

module.exports = tripRouter
