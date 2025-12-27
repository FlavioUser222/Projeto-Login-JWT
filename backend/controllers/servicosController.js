// const { servico } = require('../models/database')
const servicosRepository = require("../repos/ServicosRepository");

async function postServicosController(req, res) {
  let { nome, preco, duracao, horario } = req.body;

  const servicoCriado = await servicosRepository.criarServico(
    nome,
    preco,
    duracao,
    horario
  );

  return res.status(201).json(servicoCriado);
}

async function getServicosController(req, res) {
  const servicos = await servicosRepository.listarServicos();
  return res.json(servicos);
}

async function getTotalServicos(req, res) {
  const totalServicos = await servicosRepository.getTotalServicos();
  return res.json(totalServicos);
}

module.exports = {
  postServicosController,
  getServicosController,
  getTotalServicos,
};
