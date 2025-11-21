const { Login } = require("../controllers/loginController")

async function LoginRoute(app) {
    app.post('/login',Login)
}

module.exports = {
    LoginRoute
}