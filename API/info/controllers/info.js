const info = require("../models/info");

exports.getallValues = async (req, res, next) => {
  try {
    const result = await info.find(req.body);

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
    const result = await info.findById(req.params.id);
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

exports.createNew = async (req, res, next) => {
  try {
    const result = await info.create(req.body);
     
    
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    // res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

    res.status(201).json({
      success: true,
      data: result,
    });
    next();
  } catch (error) {
    console.log(error);
  }
};

exports.deleteValue = async (req, res, next) => {
  try {
    const result = await info.findByIdAndRemove(req.params.id);

    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    // res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

    res.status(202).json({
      success: true,
      status: deleted,
      data: result,
    });
    next();
  } catch (error) {
    console.log(error);
  }
};
