// const { usuario } = require("../models/database")
const UserRepository = require('../repos/userRepository')

const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

async function Login(req, res) {
    const { email, senha } = req.body;

    const user = UserRepository.encontrarUsuario(email)

    const senhaValida = await bcrypt.compare(senha, user.senha)

    if (!senhaValida) {
        return res.json({ message: "Senha invalida" })
    }
    const token = jwt.sign({ email }, 'segredo1234', { expiresIn: '1h' })

    return res.json({
        message: "login realizado com sucesso",
        token
    })

}


module.exports = {
    Login
}