const Coupon=require("../Models/Coupon.js")
const createError = require("../error.js");
const addCoupon = async (req, res, next) => {
  try {
   if(!req.file.filename) return createError(next(400,"their is a problem"))
    const newComment = new Coupon({
    ...req.body,img:req.file.filename}
    );
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (err) {
    next(err);
  }
};
const getCoupon = async (req, res, next) => {
  try {
    const coupons = await Coupon.find({});
    res.status(200).send(coupons);
  } catch (e) {
    next(e);
  }
};

const deleteCoupon = async (req, res, next) => {
  try {
  
    if (req.role === "Admin" ) {
      const del=await Coupon.findByIdAndDelete(req.params.id);
      
      res.status(200).json("The comment has been deleted.");
    } else {
      return next(createError(403, "You are not admin"));
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  addCoupon,
  deleteCoupon,
  getCoupon
};
