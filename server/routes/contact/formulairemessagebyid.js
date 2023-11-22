const mongoose = require("mongoose");
const { ContactModel } = require("../../db/connect");

async function getMessageById(req, res) {
  try {
    const messageId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(messageId)) {
      return res.status(400).json({ error: "ID de message invalide" });
    }

    const message = await ContactModel.findById(messageId);

    if (!message) {
      return res.status(404).json({ error: "Message non trouvé" });
    }

    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
}

module.exports = { getMessageById };
