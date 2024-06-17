const express = require("express");
const router = express.Router();
const serviceControllers = require("../controllers/serviceControllers");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

router
  .route("/")
  .post(authentication, serviceControllers.createAutoService)
  .get(authentication, serviceControllers.getAllAutoServices);

router
  .route("/:id")
  .delete(authentication, serviceControllers.deleteAutoService)
  .patch(authentication, serviceControllers.updatAutoService)
  .get(authentication, serviceControllers.getAutoService);

module.exports = router;
