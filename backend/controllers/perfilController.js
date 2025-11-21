const { usuario } = require('../models/database')


async function Perfil(req, res) {
    res.json({ message: `Bem-vindo, ${req.usuario.email}!` })
}


module.exports = { Perfil }