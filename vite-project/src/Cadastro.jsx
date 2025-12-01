import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'



function Cadastro() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    async function saveData() {
        const res = await axios.post("http://localhost:3000/register", { email, senha })
        if(res.status === 200){
            alert("Cadastro realizado com sucesso")
            navigate('/login')
        }
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
