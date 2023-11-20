const mongoose = require("mongoose");
require("dotenv").config();
const config = require("../config");

const { contactSchema } = require("../models/contact");

function connectDB() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
}

const ContactModel = mongoose.model("Contact", contactSchema);

module.exports = { connectDB, ContactModel };
