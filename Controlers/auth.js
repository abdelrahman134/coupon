const mongoose =require( "mongoose");
const User =require( "../Models/userSchema");
const bcrypt =require( "bcryptjs");
const  createError  =require( "../error.js");
const jwt =require( "jsonwebtoken");

const register = async (req, res, next) => {
  try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) throw new Error("User already exists");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    console.log(req.body.email);
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

    const token = jwt.sign({ id: user._id }, "secert");
    const { password, ...others } = user._doc;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(others);
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
