const {
  postAgendamentoController,
  getAgendamento,
  getTotalAgendamentos,
} = require("../controllers/agendamentosController");

async function agendamentosRoute(app) {
  app.get("/agendamentos", getAgendamento);
  app.get("/totalAgendamentos", getTotalAgendamentos);
  app.post("/agendamento", postAgendamentoController);
}

module.exports = {
  agendamentosRoute,
};
