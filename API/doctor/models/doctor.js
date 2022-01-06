const mongoose = require("mongoose");
const { Schema } = mongoose;
// Doctore 0
// patient 1
// med 2
// lab 3
const doctoreSchema = new Schema({
  profileID: { type: mongoose.Schema.Types.ObjectId, ref: "profileInfo" },
  speciality: {
    type: String,
    max: 50,
    trim: true,
    required: [true, "Please Add Speciality"],
  },
  fees: {
    type: String,
    max: 50,
    trim: true,
    required: [true, "Please Add Speciality"],
  },
  opentime: {
    type: String,
    max: 50,
    trim: true,
    required: [true, "Please Add Speciality"],
  },
  closetime: {
    type: String,
    trim: true,
    max: 50,
    required: [true, "Please Add Speciality"],
  },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "patient" },
});

module.exports = mongoose.model("doctors", doctoreSchema);
