const Workout = require("../models/workouts.js");
const mongoose = require("mongoose");
const router = require("express").Router();
const morgan = require("morgan");


  router.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  router.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });


  router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).sort({'day': 1}).limit(7)
    .then((data) => res.json(data))
    .catch(err => {
        res.json(err);
    });
});
module.exports = router;