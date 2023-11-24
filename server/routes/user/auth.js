const bcrypt = require("bcrypt");
const { UserModel } = require("../../models/user.js");

async function handleLogin(req, res) {
  try {
    const { pseudo, password } = req.body;

    // Vérifier si le pseudo et le mot de passe sont présents dans la requête
    if (!pseudo || !password) {
      return res.status(400).json({ error: "Missing username or password" });
    }

    // Rechercher l'utilisateur par pseudo
    const user = await UserModel.findOne({ pseudo });

    // Vérifier si l'utilisateur existe
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password1);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Authentification réussie
    res.status(200).json({ message: "Authentication successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { handleLogin };
