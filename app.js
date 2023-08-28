const cors = require("cors");
const express = require("express");
const app = express();
const auth= require("./Routers/auth.js")
const coupon=require("./Routers/coupon.js")
const addCoupon = require("./Routers/addCoupon.js");
const addBanner = require("./Routers/addBanner.js");

const cookieParser = require("cookie-parser");
const port=5000
const mongoose = require("mongoose");
const dotenv=require("dotenv"
)
dotenv.config()
mongoose.connect(
  "mongodb://127.0.0.1:27017/coupon"
);
app.use(express.json())

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://easycodesa.com",
      "https://www.easycodesa.com",
    ],

    credentials: true, // some legacy browsers (IE11, various SmartTVs) choke on 204
    exposedHeader: ["set-cookie"],
  })
);

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); 
  next();
});
app.use(cookieParser());
app.use(auth)
app.use(coupon);
app.use(addCoupon);
app.use(addBanner);
app.use(express.static("public"));

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
app.listen(port, () => {
  console.log("This Application is running On Localhost  " + port);
});
