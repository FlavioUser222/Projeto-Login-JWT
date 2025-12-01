const { User } = require('./usersModels')
const { Servicos } = require('./ServicosModel')

const usuario = new User()
const servico = new Servicos()


module.exports = { usuario, servico}