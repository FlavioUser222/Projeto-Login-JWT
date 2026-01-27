const {
  postAgendamentoController,
  getAgendamento,
  getTotalAgendamentos,
  changeStatusAgendamentos,
  deleteAgendamento,
  getAgendamentosWP,
  meusAgendametos,
} = require("../controllers/agendamentosController");



async function agendamentosRoute(app) {
  app.get("/agendamentos", getAgendamento);
  app.get("/agendamentoswp", getAgendamentosWP);
  app.get("/totalAgendamentos", getTotalAgendamentos);
  app.get('/userAgendamento/:cliente_id',meusAgendametos)
  app.post("/agendamento", postAgendamentoController);
  app.patch("/agendamento/status/:id", changeStatusAgendamentos);
  app.delete("/agendamentos/:id", deleteAgendamento);

}

module.exports = {
  agendamentosRoute,
};
