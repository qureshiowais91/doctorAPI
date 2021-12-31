const Doctor = require("../models/doctors");

exports.getDoctors = async (req, res, next) => {
  try {
    const doctor = await Doctor.find();
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.status(200).json({
      success: true,
      data: doctor,
    });
    next();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

exports.createDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.create(req.body);

    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    // res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

    res.status(200).json({
      success: true,
      data: doctor,
    });
    next();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
