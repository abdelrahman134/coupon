const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;
const addCouponSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  storeName: {
    type: String,
    require: true,
    trim: true,
  },
  storeLink: {
    type: String,
    require: true,
    trim: true,
  },
  code: {
    type: String,
    require: true,
    trim: true,
  },
  discount: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,

    required: true,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("email is invalid");
    },
    unique: false,
  },
});

const AddCoupon = mongoose.model("AddCo", addCouponSchema);
module.exports = AddCoupon;
