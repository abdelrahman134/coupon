const mongoose = require("mongoose");
const { Schema } = mongoose;
const addBannerSchema = Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});
const AddBanner = mongoose.model("AddBanner",addBannerSchema);
module.exports = AddBanner;