const {
  getFuncionario,
  postFuncionario,
} = require("../controllers/funcionarioController");

async function funcionarioRoutes(app) {
  app.get("/funcionarios", getFuncionario);
  app.post("/funcinario", postFuncionario);
}

module.exports = {
  funcionarioRoutes,
};
