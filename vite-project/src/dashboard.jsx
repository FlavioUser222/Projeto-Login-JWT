import React, { useEffect, useState } from "react";
import axios from 'axios'


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



        <input type="text" />
        <input type="number" />
        <input type="number" />
        <button onClick={() => { postServicos }}>Cadastrar Serviço</button>
    </>)

}