const {
  postAgendamentoController,
  getAgendamento,
  getTotalAgendamentos,
  changeStatusAgendamentos,
  deleteAgendamento,
  getAgendamentosWP,
} = require("../controllers/agendamentosController");

async function agendamentosRoute(app) {
  app.get("/agendamentos", getAgendamento);
  app.get("/agendamentoswp", getAgendamentosWP);
  app.get("/totalAgendamentos", getTotalAgendamentos);
  app.post("/agendamento", postAgendamentoController);
  app.patch("/agendamento/status/:id", changeStatusAgendamentos);
  app.delete("/agendamentos/:id", deleteAgendamento);
}

module.exports = {
  agendamentosRoute,
};
