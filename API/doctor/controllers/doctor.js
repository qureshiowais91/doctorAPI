const Doctor = require("../models/doctor");

exports.getallValues = async (req, res, next) => {
  try {
    const result = await Doctor.find(req.body);

    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.status(200).json({
      success: true,
      data: result,
    });
    next();
  } catch (error) {
    console.log(error);
  }
};

exports.getvalue = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
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
  }
};

exports.createNew = async (req, res, next) => {
  try {
    const doctor = await Doctor.create(req.body);

    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    // res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

    res.status(201).json({
      success: true,
      data: doctor,
    });
    next();
  } catch (error) {
    console.log(error);
  }
};

// exports.deleteValue = async (req, res, next) => {
//   try {
//     await Doctor.findByIdAndRemove(req.params.id);

//     // res.setHeader('Access-Control-Allow-Origin', '*');
//     // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
//     // res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

//     res.status(202).json({
//       success: true,
//       data: [],
//     });
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };
