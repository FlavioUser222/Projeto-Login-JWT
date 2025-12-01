const { servico } = require('../models/database')

async function postServicosController(req, res) {
    let { nome, preco, duracao } = req.body

    servico.criarServico(nome, preco, duracao)

    return res.json({
        nome,
        preco,
        duracao
    })
}

async function getServicosController(req, res) {
    return res.json(servico.listarServico())
}

module.exports = {
    postServicosController,
    getServicosController
}