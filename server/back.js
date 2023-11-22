const express = require("express");
const cors = require("cors");

require("dotenv").config();

const bodyParser = require("body-parser");

const { connectDB } = require("./db/connect");
const { handleFormSubmission } = require("./routes/form");
const { getMessages } = require("./routes/liste");

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.post("/send-form", handleFormSubmission);
app.get("/list-contact", getMessages);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
