const express = require("express");
const router = express.Router();
const { getDoctors, createDoctor } = require("../controllers/doctors");

router.route("/").get(getDoctors).post(createDoctor);

module.exports = router;

