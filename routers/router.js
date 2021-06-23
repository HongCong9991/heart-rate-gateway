const express = require("express");
const router = express.Router();
const heartRateService = require("./heartRateService")
const healthInfoService = require("../HealthInfo/router/healthInfo.router")
const userService = require("./userService")

router.use((req, res, next) => {
    console.log("Called: ", req.originalUrl)
    next();
});

router.use(heartRateService)
router.use(userService)
router.use(healthInfoService)

module.exports = router
