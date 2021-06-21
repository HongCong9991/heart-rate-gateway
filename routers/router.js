const express = require("express");
const router = express.Router();
const heartRateService = require("./heartRateService");
const healthInfoService = require("./healthInfoService");
const userService = require("./userService");

router.use((req, res, next) => {
    next();
});

router.use(heartRateService);
router.use(userService);
//router.use(healthInfoService);

module.exports = router;
