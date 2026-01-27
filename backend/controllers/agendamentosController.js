// const { agendamento } = require("../models/database")
const AgendamentosRepository = require("../repos/AgendamentosRepository");
const { formatTime } = require("../services/formatTime");



async function postAgendamentoController(req, res) {
  let { cliente_id, barbeiro_id, servico_id, hora_inicial, valor, status } = req.body;

  const horaServico = await AgendamentosRepository.pegarHoraServico(servico_id)

  if (hora_inicial > horaServico) {
    console.log("Erro ao realizar agendamento")
    return
  }


  let hora_final = formatTime(hora_inicial, horaServico)


  const novoAgendamento = await AgendamentosRepository.criarAgendamentos(
    cliente_id,
    barbeiro_id,
    servico_id,
    hora_inicial,
    valor,
    status,
    hora_final
  );


  res.status(201).json(novoAgendamento);


}

async function getAgendamento(req, res) {
  const page = req.query.page || 1;
  const limit = req.query.limit;
  const offset = req.query.offset;
  console.log(offset)

  const listaAgendamentos = await AgendamentosRepository.listarAgendamentos(
    limit,
    offset
  );

  return res.json(listaAgendamentos);
}

async function getAgendamentosWP(req, res) {
  const listaAgendamentos = await AgendamentosRepository.listarAgendamentosWP();
  return res.json(listaAgendamentos);
}

async function getTotalAgendamentos(req, res) {
  const agendamentosTotais =
    await AgendamentosRepository.getTotalAgendamentos();
  return res.json(agendamentosTotais);
}

async function changeStatusAgendamentos(req, res) {
  const { status } = req.body;
  const { id } = req.params;
  console.log(id);

  const newStatus = await AgendamentosRepository.changeStatusAgendamentos(
    status,
    id
  );

  res.json(newStatus);
}

async function deleteAgendamento(req, res) {
  let { id } = req.params;
  const deleteAgendamento = await AgendamentosRepository.deleteAgendamento(id);
  res.json(deleteAgendamento);
}

async function meusAgendametos(req, res) {
  let { cliente_id } = req.body
  const showMyAgendamentos = await AgendamentosRepository.listarAgendamentosByUser(cliente_id)

  res.json(showMyAgendamentos)
}








module.exports = {
  postAgendamentoController,
  getAgendamento,
  getTotalAgendamentos,
  changeStatusAgendamentos,
  deleteAgendamento,
  getAgendamentosWP,
  meusAgendametos
};
