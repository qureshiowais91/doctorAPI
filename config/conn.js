const mongoose = require("mongoose");

const connDB = async () => {
  const conn = mongoose.connect(process.env.MONGO);
  return conn;
};

module.exports = connDB;
