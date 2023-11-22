const mongoose = require("mongoose");

const { ContactModel } = require("../../db/connect");

async function deleteMessage(req, res) {
  try {
    // Récupère l'ID à partir des paramètres de requête
    const messageId = req.params.id;
    console.log(messageId + " : " + typeof messageId);

    // Vérifie si l'ID est valide
    if (!mongoose.Types.ObjectId.isValid(messageId)) {
      return res.status(400).json({ error: "ID de message invalide" });
    }

    // Supprime le message avec l'ID spécifié
    const result = await ContactModel.deleteOne({ _id: messageId });

    // Vérifie si le message a été trouvé et supprimé
    if (result.deletedCount === 1) {
      return res
        .status(200)
        .json({ message: "Le message a été supprimé avec succès." });
    } else {
      return res.status(404).json({ error: "Message non trouvé" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
}

module.exports = { deleteMessage };
