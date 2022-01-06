const mongoose = require("mongoose");

const connDB = async () => {
  const conn =  mongoose
    .connect(process.env.MONGO)
    .then((mongoDB) => {
      console.log(mongoDB.connection.host);
    })
    .catch((err) => {
      console.log(`Erorr ${err}`.red);
    });
  return conn;
};

module.exports = connDB;
