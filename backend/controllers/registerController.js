const { usuario } = require("../models/database")
const bcrypt = require("bcryptjs")

async function register(req, res) {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(401).json({ message: "Usuario nao encontrado" })
    }

    const senhaHash = await bcrypt.hash(senha, 10)

    usuario.criarUsuario(email, senhaHash)

    return res.json({
        message: "Usuario salvo com sucesso",
    })
}


module.exports = {
    register
}