const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileInfoSchema = new Schema({
  profileID: { type: mongoose.Schema.Types.ObjectId, ref: "profileInfo" },
  username: {
    type: String,
    max: [100, "Max Length Is 100 Characters"],
  },
  legalname: {
    type: String,
    max: [100, "Max Length Is 100 Characters"],
  },
  email: {
    type: String,
    max: [100, "Max Length Is 100 Characters"],
  },
  password: {
    type: String,
    max: [32, "Max Length Is 32 Characters"],
  },
  address: {
    type: String,
    max: [100, "Max Length Is 100 Characters"],
  },
  identity: {
    type: number,
    enum: [0, 1, 2, 3],
  },
});

module.exports = mongoose.model("profileInfo", profileInfoSchema);
