const AutoService = require("../models/serviceModel");

//getAllAutoService////////////////////////////////////////
exports.getAllAutoServices = async (req, res) => {
  try {
    const autoServices = await AutoService.find().sort({
      createdAt: -1,
    });
    if (!autoServices) {
      throw new Error("There is no auto services");
    }
    res.status(200).json({
      data: autoServices,
      success: true,
      error: false,
      message: "Autoservices loaded",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
//getAllAutoService////////////////////////////////////////
exports.getAutoService = async (req, res) => {
  try {
    const autoService = await AutoService.find({ _id: req.params.id });

    if (!autoService) {
      throw new Error("There is no such auto service");
    }
    res.status(200).json({
      data: autoService,
      success: true,
      error: false,
      message: "Autoservices loaded",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
//createAutoService////////////////////////////////////////
exports.createAutoService = async (req, res) => {
  try {
    if (!req?.body?.name) {
      throw new Error("Missing service name");
    }
    if (!req?.body?.address) {
      throw new Error("Missing service address");
    }
    if (!req?.body?.bossman) {
      throw new Error("Missing service bossman");
    }

    const newAutoService = await AutoService.create(req.body);

    res.status(201).json({
      data: newAutoService,
      success: true,
      error: false,
      message: "Autoservices created",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
//updateAutoService////////////////////////////////////////
exports.updatAutoService = async (req, res) => {
  try {
    const autoService = await AutoService.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      data: autoService,
      success: true,
      error: false,
      message: "Autoservices updated",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
//deleteAutoService////////////////////////////////////////
exports.deleteAutoService = async (req, res) => {
  try {
    await AutoService.findByIdAndDelete(req.params.id);

    res.status(200).json({
      data: [],
      success: true,
      error: false,
      message: "Autoservices deleted",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
