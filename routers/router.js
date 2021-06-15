const express = require("express");
const router = express.Router();
const heartRateService = require("./heartRateService");

router.use((req, res, next) => {
    next();
});

router.use(heartRateService);

module.exports = router;
