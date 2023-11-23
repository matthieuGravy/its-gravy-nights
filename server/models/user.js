const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
      unique: false,
    },
    lastname: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password1: {
      type: String,
      required: true,
      unique: false,
    },
    password2: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { collection: "Itsgravymember" }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = { userSchema, UserModel };
