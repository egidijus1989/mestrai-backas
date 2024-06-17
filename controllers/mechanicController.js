const AutoWorker = require("../models/mechanicModel");

//getAllAutoWorkers////////////////////////////////////////
exports.getAllAutoWorkers = async (req, res) => {
  try {
    const autoWorkers = await AutoWorker.find().sort({
      createdAt: -1,
    });

    if (!autoWorkers) {
      throw new Error("There is no auto workers");
    }
    res.status(200).json({
      data: autoWorkers,
      success: true,
      error: false,
      message: "Autoworkers loaded",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
//getAllAutoWorker////////////////////////////////////////
exports.getAutoWorker = async (req, res) => {
  try {
    const autoWorker = await AutoWorker.findOne({ _id: req.params.id });

    if (!autoWorker) {
      throw new Error("There is no such auto service");
    }
    res.status(200).json({
      data: autoWorker,
      success: true,
      error: false,
      message: "AutoWorker loaded",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
//createAutoWorker////////////////////////////////////////
exports.createAutoWorker = async (req, res) => {
  try {
    if (!req?.body?.name) {
      throw new Error("Missing worker name");
    }
    if (!req?.body?.lastname) {
      throw new Error("Missing worker lastname");
    }
    if (!req?.body?.speciality) {
      throw new Error("Missing worker speciality");
    }
    if (!req?.body?.city) {
      throw new Error("Missing worker city");
    }
    if (!req?.body?.autoService) {
      throw new Error("Missing worker autoService");
    }

    const newAutoWorker = await AutoWorker.create(req.body);

    res.status(201).json({
      data: newAutoWorker,
      success: true,
      error: false,
      message: "NewAutoWorker created",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
//updateAutoWorker////////////////////////////////////////
exports.updatAutoWorker = async (req, res) => {
  try {
    const autoWorker = await AutoWorker.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      data: autoWorker,
      success: true,
      error: false,
      message: "AutoWorker updated",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
//deleteWorker////////////////////////////////////////
exports.deleteAutoWorker = async (req, res) => {
  try {
    await AutoWorker.findByIdAndDelete(req.params.id);

    res.status(200).json({
      data: [],
      success: true,
      error: false,
      message: "AutoWorker deleted",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
//likeAutoWorker////////////////////////////////////////
exports.likeAutoWorker = async (req, res) => {
  try {
    const autoWorker = await AutoWorker.find({ _id: req.params.id });
    const sessionUserId = req.user._id;

    if (!autoWorker) {
      throw new Error("There is no such auto worker");
    }
    const userIndex = autoWorker.likes.indexOf(sessionUserId);
    if (userIndex === -1) {
      autoWorker.numberOfLikes += 1;
      autoWorker.likes.push(sessionUserId);
    } else {
      autoWorker.numberOfLikes -= 1;
      autoWorker.likes.splice(userIndex, 1);
    }

    res.status(200).json({
      data: autoWorker,
      success: true,
      error: false,
      message: "AutoWorker loaded",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
