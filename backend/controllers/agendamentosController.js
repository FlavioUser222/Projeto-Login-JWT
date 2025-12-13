const { agendamento } = require("../models/database")

async function postAgendamentoController(req, res) {
    let { cliente_id, barbeiro_id, servico_id, hora, valor, status } = req.body

    agendamento.validarAgendamentos(cliente_id,barbeiro_id,servico_id,hora,valor,status)

    const novoAgendamento = agendamento.criarAgendamento(cliente_id, barbeiro_id, servico_id, data, hora, valor, status)

    res.status(201).json(novoAgendamento)
}

async function getAgendamento(req, res) {
    const listaAgendamentos = agendamento.listarAgendamentos()
    
    return res.json(listaAgendamentos)
}

module.exports = {
    postAgendamentoController,
    getAgendamento

}