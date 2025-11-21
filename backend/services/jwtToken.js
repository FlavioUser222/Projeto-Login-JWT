const jwt = require('jsonwebtoken')
const { usuario } = require('../models/database')


function verificaToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.status(401).json({ message: 'Token não encontrado' })

    jwt.verify(token, 'segredo1234', (err, user) => {
        if (err) return res.status(403).json({ message: 'Token inválido' })
        req.usuario = user
        next()
    })
}


module.exports = {
    verificaToken
}