const express = require("express");
const router = express.Router();
const controller = require("../controllers/healthInfo.controller.js");
const verifyUser = require("../Config/middleware/verifyUser");

router.post("/api/healthinfo/get",verifyUser, controller.getHealthInfo);
router.post("/api/healthinfo/update",verifyUser, controller.updateHealthInfo);

module.exports = router;