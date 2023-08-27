const express = require("express");
const { addCoupon } = require("../Controlers/addCoupon");

const router = express.Router();

router.post("/addCoupon", addCoupon);

module.exports = router;
