const mongoose = require("mongoose");
const { Schema } = mongoose;

const patient = new Schema({
  profileID: { type: mongoose.Schema.Types.ObjectId, ref: "profileInfo" },
  // Appointment Endpoint
  appointment: [
    {
      issue: {
        type: String,
        max: [100, "Max character is 100"],
      },
      time: {
        type: String,
      },
      date: {
        type: String,
      },
      doctor: { type: mongoose.Schema.Types.ObjectId, ref: "doctore" }, 
    },
  ],
});

module.exports = mongoose.model("patients", patient);
