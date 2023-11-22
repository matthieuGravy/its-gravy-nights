const mongoose = require("mongoose");

const { ContactModel } = require("../../db/connect");

async function getMessages(req, res) {
  try {
    // Récupère tous les messages
    const messages = await ContactModel.find();

    // Envoie les messages en réponse
    res.status(200).json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { getMessages };
