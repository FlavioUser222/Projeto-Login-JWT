const { register } = require('../controllers/registerController.js')

async function registerRoute(app) {
    app.post('/register', register)
}

module.exports = { registerRoute }