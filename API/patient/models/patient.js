const mongoose = require("mongoose");
const { Schema } = mongoose;

const patient = new Schema({
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "doctore" },
});

module.exports = mongoose.model("patients", patient);
