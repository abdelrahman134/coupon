const express = require("express");
const { addCoupon, deleteCoupon, getCoupon } = require("../Controlers/coupon");
const auth = require("../Middlewar/authrole");

const router = express.Router();
const upload = require("../Middlewar/upload");
router.post("/add", upload.single("img"),auth, addCoupon);
router.get("/get", getCoupon);
router.delete("/delete/:id",auth, deleteCoupon);

module.exports = router;
