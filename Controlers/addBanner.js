const Banner = require("../Models/addBanner.js");
const createError = require("../error.js");
const addBanner = async (req, res, next) => {
  try {
    console.log(req.file);
    if (!req.file.path) return createError(next(400, "their is a problem"));
    const newComment = new Banner({
      ...req.body,
      img: req.file.filename,
    });
     
   
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    next(err);
  }
};
const getBanner = async (req, res, next) => {
  try {
    const banners = await Banner.find({});
    res.status(200).send(banners);
  } catch (e) {
    next(e);
  }
};

const deleteBanner = async (req, res, next) => {
  try {
    if (req.role === "Admin") {
      const del = await Banner.findByIdAndDelete(req.params.id);

      res.status(200).json("The comment has been deleted.");
    } else {
      return next(createError(403, "You are not admin"));
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  addBanner,
  deleteBanner,
  getBanner,
};
