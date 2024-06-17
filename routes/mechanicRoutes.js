const express = require("express");
const router = express.Router();
const mechanicControllers = require("../controllers/mechanicController");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .post(authentication, mechanicControllers.createAutoWorker)
  .get(authentication, mechanicControllers.getAllAutoWorkers);

router
  .route("/:id")
  .delete(authentication, mechanicControllers.deleteAutoWorker)
  .patch(authentication, mechanicControllers.updatAutoWorker)
  .get(authentication, mechanicControllers.getAutoWorker)
  .patch(authentication, mechanicControllers.likeAutoWorker);

module.exports = router;
