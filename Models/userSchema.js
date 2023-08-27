const mongoose =  require("mongoose")
const validator=require("validator")
const {Schema}=mongoose
const userSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
    trim: true,
  },
  LastName: {
    type: String,
    required: true,
    trim: true,
  },
  password : {
    type: String,
    trim: true,
    
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate(val) {
      if (!validator.isEmail(val)) throw new Error("email is invalid");
    },
  },
  role: {
    type: String,
    enum: ["Employer", "Admin"],
    default: "Employer",
  },
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;