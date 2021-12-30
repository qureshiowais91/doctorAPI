const Doctor = require("../models/doctors");

exports.getDoctors = async (req, res,next) => {
  try {
    const doctor = await Doctor.find();

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
