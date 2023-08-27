const mongoose = require("mongoose");
const { Schema } = mongoose;
const couponSchema = Schema({

    companyName: {
    type: String,
    required: true,
    trim: true,
  },

  discount: {
    type: String,
    required: true,
  },
  couponCode: {
    type: String,
    required: true,
  },
  siteLink: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
});

const User = mongoose.model("coupon", couponSchema);
module.exports = User;