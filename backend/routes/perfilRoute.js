const { Perfil } = require('../controllers/perfilController.js')
const { verificaToken } = require('../services/jwtToken.js')

async function perfilRoute(app) {
    app.get('/perfil', verificaToken , Perfil)
}

module.exports = { perfilRoute }