const express = require("express");
// dot env file allow us to hide information that we dont want to share on github and other place.
// https://www.youtube.com/watch?v=17UVejOw3zA
//https://www.youtube.com/watch?v=txGL-Ld9zD8
const dotenv = require("dotenv");
//  MVC and Basic Server
// https://www.iamtimsmith.com/blog/creating-a-basic-server-with-express-js
const doctors = require("./API/routes/doctors");
const pharmacy = require("./API/routes/pharmacy");
// mongoose
// https://www.quora.com/What-is-mongoose-for-MongoDb?share=1
// https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
// https://masteringjs.io/tutorials/mongoose/explain

// YT links
//   mongodb
// https://www.youtube.com/watch?v=Www6cTUymCY
//  mongoos
// https://www.youtube.com/watch?v=5QEwqX5U_2M
const connectMongoDB = require("./config/conn");
const app = express();

dotenv.config({ path: "./config/.env" });
const PORT = process.env.PORT || 8080;

connectMongoDB()
  .then((mongoDB) => {
    console.log(mongoDB.connection.host);
  })
  .catch((err) => {
    console.log(`Erorr ${err}`.red);
  });

//  middleware
app.use(express.json());
app.use("/doctors", doctors);
app.use("/pharmacy", pharmacy);

app.listen(PORT, () => {
  console.log(`server ${PORT}`);
});
