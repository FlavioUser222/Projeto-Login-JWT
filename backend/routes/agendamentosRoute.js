const { postAgendamentoController, getAgendamento } = require('../controllers/agendamentosController')

async function agendamentosRoute(app) {
    app.get('/agendamentos', getAgendamento)
    app.post('/agendamento', postAgendamentoController)

}

module.exports = {
    agendamentosRoute
}



