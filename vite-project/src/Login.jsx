import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    async function saveData() {
        try {
            const res = await axios.post("http://localhost:3000/login", { email, senha })
            if (res.data.token) {
                localStorage.setItem("token", res.data.token)
                alert("Login realizado com sucesso!")
                navigate('/home')
            }

        } catch (error) {
            alert("Erro ao realizar o login")
        }
    }

    return (
        <>
            <div>
                <h1>Login</h1>
                <input type="email"  placeholder='Email'value={email} required onChange={e => { setEmail(e.target.value) }} />
                <input type="password" value={senha} placeholder='Senha' onChange={e => { setSenha(e.target.value) }} />
                <button onClick={saveData}>Enviar</button>
            </div>
        </>
    )
}

export default Login
