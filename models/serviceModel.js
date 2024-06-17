const mongoose = require("mongoose");

const autoServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "autoservice must have a name"],
      unique: true,
    },
    address: {
      type: String,
      required: [true, "must have an address"],
    },
    bossman: {
      type: String,
      required: [true, "must have an bossman"],
    },
  },
  { timestamps: true }
);

const AutoService = mongoose.model("AutoService", autoServiceSchema);

module.exports = AutoService;
