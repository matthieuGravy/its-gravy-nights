const mongoose = require("mongoose");
const { ContactModel } = require("../../db/connect");

async function handleFormSubmission(req, res) {
  try {
    const { name, email, message } = req.body;

    // Crée une instance du modèle Contact
    const contact = new ContactModel({ name, email, message });

    // Sauvegarde dans la base de données
    await contact.save();
    // Envoie une réponse réussie
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    // Gestion des erreurs
    if (error instanceof mongoose.Error.ValidationError) {
      // Erreurs de validation des données
      res.status(400).json({ error: error.message });
    } else if (error.code === 11000) {
      // Violation d'index unique (par exemple, e-mail déjà existant)
      res.status(400).json({ error: "Email already exists" });
    } else {
      // Autres erreurs
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = { handleFormSubmission };
