// const { agendamento } = require("../models/database")
const AgendamentosRepository = require("../repos/AgendamentosRepository");

async function postAgendamentoController(req, res) {
  let { cliente_id, barbeiro_id, servico_id, hora, valor, status } = req.body;

  const novoAgendamento = await AgendamentosRepository.criarAgendamentos(
    cliente_id,
    barbeiro_id,
    servico_id,
    hora,
    valor,
    status
  );
  res.status(201).json(novoAgendamento);
}

async function getAgendamento(req, res) {
  const listaAgendamentos = await AgendamentosRepository.listarAgendamentos();
  return res.json(listaAgendamentos);
}

module.exports = {
  postAgendamentoController,
  getAgendamento,
};
