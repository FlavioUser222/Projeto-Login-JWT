import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
import Login from "./Login"
import { useNavigate } from 'react-router-dom'



function Cadastro() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    async function saveData() {
        const res = await axios.post("http://localhost:3000/register", { email, senha })
        navigate('/login')
    }

    return (
        <>
            <div>
                <h1>Cadastrar-se</h1>
                <input type="email" placeholder='Email' value={email} onChange={e => { setEmail(e.target.value) }} />
                <input type="password" placeholder='Senha' value={senha} onChange={e => { setSenha(e.target.value) }} />
                <button onClick={saveData}>Cadastrar-se</button>
            </div>
        </>
    )
}

export default Cadastro
