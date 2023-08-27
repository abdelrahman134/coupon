const multer = require("multer");
const path = require("path");


  const storage = multer.diskStorage({
  destination: function(req, file, cb) {
  cb(null, "../user/build/uploads/");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`)
  }
})

var upload = multer({
  storage: storage,
  limits: { fileSize: 15 * 1024 * 1024 },
});

module.exports = upload;
