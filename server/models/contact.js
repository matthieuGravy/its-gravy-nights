const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: false,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { collection: "itsgravyCollection" }
);

const ContactModel = mongoose.model("Contact", contactSchema);

module.exports = { contactSchema, ContactModel };
