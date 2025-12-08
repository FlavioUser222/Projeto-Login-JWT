import React, { useEffect, useState } from "react";
import axios from 'axios'
import TabLateral from './components/tabDashboard'


export default function Dashboard() {
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState(0)
    const [duracao, setDuracao] = useState(0)

    async function postServicos() {
        try {
            let res = await axios.post('http://localhost:3000/servico', { nome, preco, duracao })
            alert("Serviço criado com sucesso!")
        } catch (error) {
            console.error("erro ao criar ")
        }
    }

    return (<>
        <header>
            <h1>Dashboard</h1>
        </header>

        <TabLateral />

        <div className="container-dashboard">
            <input type="text" value={nome} onChange={text => { setNome(text.target.value) }} />
            <input type="number" value={preco} onChange={text => { setPreco(text.target.value) }} />
            <input type="number" value={duracao} onChange={text => { setDuracao(text.target.value) }} />
            <button onClick={() => { postServicos() }}>Cadastrar Serviço</button>
        </div>
    </>)
}