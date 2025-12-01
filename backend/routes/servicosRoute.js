const { postServicosController, getServicosController } = require('../controllers/servicosController')


async function servicosRoute(app) {
    app.post('/servico', postServicosController)
    app.get('/servicos', getServicosController)

}

module.exports = {
    servicosRoute
}




