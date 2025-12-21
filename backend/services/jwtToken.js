const jwt = require("jsonwebtoken");
const user = require("../repos/userRepository");

async function verificaToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token não encontrado" });
  const decoded = jwt.verify(token, "segredo1234");
  const usuario = await userRepository.encontrarUsuario(decoded.email);

  if (!usuario) {
    return res
      .status(404)
      .json({ message: "Usuário não encontrado no sistema" });
  }

  req.user = usuario;
  next();
}

module.exports = {
  verificaToken,
};
