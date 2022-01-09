// auther : Qureshi Owais
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const dotenv = require("dotenv");
const doctor = require("./API/doctor/routes/doctor");
const patient = require("./API/patient/routes/patient");
const info = require("./API/info/routes/info");

const connectMongoDB = require("./config/conn");

const app = express();

dotenv.config({ path: "./config/.env" });
const PORT = process.env.PORT || 8080;

connectMongoDB();

//  middleware
app.use(cors());
app.use(morgan("common"));
app.use(express.json());

app.use("/api/v1/doctor", doctor);
app.use("/api/v1/patient", patient);
app.use("/api/v1/profileInfo", info);

app.listen(PORT, () => {
  console.log(`server ${PORT}`);
});
