const { User } = require('./usersModels')
const { Servicos } = require('./ServicosModel')
const { Agendamento } = require('./agendamentoModel')


const usuario = new User()
const servico = new Servicos()
const agendamento = new Agendamento()

module.exports = { usuario, servico, agendamento }