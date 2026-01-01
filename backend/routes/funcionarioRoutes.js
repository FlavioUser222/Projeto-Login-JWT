const {
  getFuncionario,
  postFuncionario,
  getTotalFuncionario,
} = require("../controllers/funcionarioController");

async function funcionarioRoutes(app) {
  app.get("/funcionarios", getFuncionario);
  app.post("/funcionario", postFuncionario);
  app.get("/totalfuncionarios", getTotalFuncionario);
}

module.exports = {
  funcionarioRoutes,
};
