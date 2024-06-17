const mongoose = require("mongoose");
const AutoService = require("./serviceModel");

const autoWorkerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "An autoWorker must have a name"],
    },
    lastname: {
      type: String,
      required: [true, "An autoWorker must have a lastename"],
    },
    speciality: {
      type: String,
      required: [true, "An autoWorker must have a speciality"],
    },
    city: {
      type: String,
      required: [true, "An autoWorker must have a city"],
    },
    autoService: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "AutoService",
      },
    ],
    likes: {
      type: Array,
      default: [],
    },
    numberOfLikes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const AutoWorker = mongoose.model("AutoWorker", autoWorkerSchema);

module.exports = AutoWorker;
