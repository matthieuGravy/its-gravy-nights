const express = require("express");
const cors = require("cors");
require("dotenv").config();

const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const { connectDB } = require("./db/connect");
const { handleFormSubmission } = require("./routes/contact/formulairecontact");
const { getMessages } = require("./routes/contact/listemessages");
const { deleteMessage } = require("./routes/contact/removemessage");
const { getMessageById } = require("./routes/contact/formulairemessagebyid");
const { handleSign } = require("./routes/user/createUsers");

const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

//utilisation de cookie-parser et ajout de https en production
const sessionOptions = {
  secret: "une valeur très secrète",
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
  }),
};
if (app.get("env") === "production") {
  sessionOptions.cookie.secure = true;
}

app.use(session(sessionOptions));

connectDB();

app.post("/send-form", handleFormSubmission);
app.get("/list-contact", getMessages);
app.delete("/delete-message/:id", deleteMessage);
// Sélectionner un message
app.get("/get-message/:id", getMessageById);

app.use(express.json());
// Point de terminaison de test
app.post("/test", (req, res) => {
  try {
    res.status(200).json({ message: "This is a test response" });
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Inscription
app.post("/sign", handleSign);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
