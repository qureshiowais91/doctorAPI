const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileInfoSchema = new Schema({
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
    type: String,
    max: [1, "Max & min Length Is 1 Characters"],    
    min: [1, "Max & min Length Is 1 Characters"],
  },                                                  
});

module.exports = mongoose.model("profileInfo", profileInfoSchema);
