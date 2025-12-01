const express = require('express')
const cors = require('cors')
const { registerRoute } = require('./routes/registerRoute')
const { LoginRoute } = require('./routes/loginRoute')
const { perfilRoute } = require('./routes/perfilRoute')
const { servicosRoute } = require('./routes/servicosRoute')

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
}))

app.use(express.json())

registerRoute(app)
LoginRoute(app)
perfilRoute(app)

servicosRoute(app)


app.listen(3000, () => {
    console.log("App rodando na porta 3000")
})

