const { agendamento } = require("../models/database")

async function postAgendamentoController(req, res) {
    let { cliente_id, barbeiro_id, servico_id, data, hora, valor, status } = req.body

    const novoAgendamento = agendamento.criarAgendamento(cliente_id, barbeiro_id, servico_id, data, hora, valor, status)

    res.status(201).json(novoAgendamento)
}

async function getAgendamento(req, res) {

    const listaAgendamentos = res.send(agendamento.listarAgendamentos())

    return res.json(listaAgendamentos)
    
}

module.exports = {
    postAgendamentoController,
    getAgendamento

}