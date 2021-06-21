const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();
const apiAdapter = require("./apiAdapter");

const BASE_URL = "https://heart-rate-service-hcmus.herokuapp.com";
const api = apiAdapter(BASE_URL);

router.post("/api/healthinfo/get", (req, res) => {
    if (req.headers.token === undefined) {
        api.post(req.originalUrl).then((resp) => {
            res.send(resp.data);
        });
    } else {
        api.post(req.originalUrl, req.body, {
            headers: {
                token: req.headers.token,
            },
        }).then((resp) => {
            res.send(resp.data);
        });
    }
});

router.post("/api/healthinfo/update", (req, res) => {
    if (req.headers.token === undefined) {
        api.post(req.originalUrl).then((resp) => {
            res.send(resp.data);
        });
    } else {
        api.post(req.originalUrl, req.body, {
            headers: {
                token: req.headers.token,
            },
        }).then((resp) => {
            res.send(resp.data);
        });
    }
});


module.exports = router;