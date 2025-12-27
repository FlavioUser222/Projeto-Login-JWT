const {
  postServicosController,
  getServicosController,
  getTotalServicos,
} = require("../controllers/servicosController");

async function servicosRoute(app) {
  app.post("/servico", postServicosController);
  app.get("/servicos", getServicosController);
  app.get("/totalservicos", getTotalServicos);
}

module.exports = {
  servicosRoute,
};
