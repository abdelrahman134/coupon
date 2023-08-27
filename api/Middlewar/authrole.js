const jwt = require("jsonwebtoken");
const User = require("../Models/userSchema");
const createError = require("../error.js");

const auth = (req, res, next) => {
  try {
    const token = req?.cookies?.accessToken;
  

    if (!token) return next(createError(401, "You are not authenticated!"));

    jwt.verify(token, "secert", async (err, obj) => {
      if (err) return next(createError(403, "Token is not valid!"));

      const user = await User.findById(obj.id);
      if (!user) return next(createError(404, "Token is not valid!"));
      req.user = user;
      req.role = user.role;

      next(); 
    });
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = auth;
// const jwt = require("jsonwebtoken");
// const User = require("../Models/userSchema.js");

// const verifyToken = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) return next(createError(401, "You are not authenticated!"));

//   jwt.verify(token, "secert", (err, user) => {
//     if (err) return next(createError(403, "Token is not valid!"));
//     req.user = user;
//     req.role = user.role;
//     next();
//   });
// };

// module.exports = verifyToken;
