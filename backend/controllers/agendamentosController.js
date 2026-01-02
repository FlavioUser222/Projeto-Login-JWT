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
  const page = req.query.page || 1;
  const limit = req.query.limit || 20;
  const offset = (page - 1) * limit;

  const listaAgendamentos = await AgendamentosRepository.listarAgendamentos(
    limit,
    offset
  );

  return res.json(listaAgendamentos);
}

async function getTotalAgendamentos(req, res) {
  const agendamentosTotais =
    await AgendamentosRepository.getTotalAgendamentos();
  return res.json(agendamentosTotais);
}

module.exports = {
  postAgendamentoController,
  getAgendamento,
  getTotalAgendamentos,
};
