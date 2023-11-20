const express = require("express");
const cors = require("cors");

require("dotenv").config();
const config = require("./config");
const bodyParser = require("body-parser");

const { connectDB, defineContactModel } = require("./db/connect");
const { handleFormSubmission } = require("./routes/form");

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.post("/send-form", handleFormSubmission);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
