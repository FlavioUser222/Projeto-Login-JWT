const { postAgendamentoController, getAgendamento } = require('../controllers/agendamentosController')

async function agendamentosRoute(app) {
    app.post('/agendamento', postAgendamentoController)
    app.get('/agendamentos', getAgendamento)

}

module.exports = {
    agendamentosRoute
}



