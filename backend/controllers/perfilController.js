// const { usuario } = require('../models/database')
const UserRepository = require('../repos/userRepository')

async function Perfil(req, res) {
    res.json({ message: `Bem-vindo, ${UserRepository.encontrarUsuario}!` })
}

module.exports = { Perfil }