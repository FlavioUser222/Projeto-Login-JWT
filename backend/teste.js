import { User } from "./user.js";
import { BancoDeUsuarios } from "./banco.js";
import express from "express"

const banco = new BancoDeUsuarios()

const app = express()
app.use(express.json());

app.post('/users', (req, res) => {
    const { nome, email, senha } = req.body
    banco.cadastrarUsuario(nome,email,senha)
    res.send("Usuario cadastrado com sucesso")
})

app.get('/users',(req,res)=>{
    const listaDeUsers = banco.listarUsuarios()
    res.send(listaDeUsers)
})










app.listen('3000', () => { console.log('rondando') })


