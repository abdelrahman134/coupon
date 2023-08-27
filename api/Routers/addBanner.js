const express = require("express");
const { addBanner, deleteBanner, getBanner } = require("../Controlers/addBanner");
const auth = require("../Middlewar/authrole");

const router = express.Router();
const upload = require("../Middlewar/upload");
router.post("/addBanner", upload.single("img"), auth, addBanner);
router.get("/getBanner", getBanner);
router.delete("/deleteBanner/:id", auth, deleteBanner);

module.exports = router;
