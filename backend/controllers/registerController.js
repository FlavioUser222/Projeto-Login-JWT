// const { usuario } = require("../models/database")
const UserRepository = require('../repos/userRepository')
const bcrypt = require("bcryptjs")

async function register(req, res) {
    const { email, senha } = req.body;

    const senhaHash = await bcrypt.hash(senha, 10)

    UserRepository.criarUsuario(email, senhaHash)

    return res.json({
        message: "Usuario salvo com sucesso",
    })
}


module.exports = {
    register
}