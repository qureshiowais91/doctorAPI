const express = require("express");
const router = express.Router();

const {
  getallValues,
  getvalue,
  deleteValue,
  createNew,
} = require("../controllers/doctor");

//Doctors Router
router.route("/").get(getallValues).post(createNew);
router.route("/:id").delete(deleteValue).get(getvalue);
module.exports = router;
