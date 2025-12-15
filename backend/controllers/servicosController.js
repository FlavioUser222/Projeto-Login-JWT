const { servico } = require('../models/database')

async function postServicosController(req, res) {
    let { nome, preco, duracao,horario } = req.body

    servico.criarServico(nome, preco, duracao,horario)

    return res.json({
        nome,
        preco,
        duracao,
        horario
    })
}

async function getServicosController(req, res) {
    return res.json(servico.listarServico())
}

module.exports = {
    postServicosController,
    getServicosController
}