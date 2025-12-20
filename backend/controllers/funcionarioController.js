const FuncionarioRepository = require("../repos/FuncionarioRepository");

async function postFuncionario(req, res) {
  let { nome, facebook, instagram, whatsapp, admissao } = req.body;

  let novoFuncionario = await FuncionarioRepository.postarFuncionario(
    nome,
    facebook,
    instagram,
    whatsapp,
    admissao
  );

  res.send(novoFuncionario);
}

async function getFuncionario(req, res) {
  let listaFuncionarios = await FuncionarioRepository.listarFuncionarios();

  res.send(listaFuncionarios);
}

module.exports = {
  postFuncionario,
  getFuncionario,
};
