import axios from "axios"
import { useState } from "react"
import TabLateral from "./tabDashboard"
import HeaderDashboard from "./headerDashboard"


export default function ServicosDashboard() {
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
        <HeaderDashboard />
        <TabLateral />

        <input type="text" value={nome} onChange={text => { setNome(text.target.value) }} />
        <input type="number" value={preco} onChange={text => { setPreco(text.target.value) }} />
        <input type="number" value={duracao} onChange={text => { setDuracao(text.target.value) }} />
        <button onClick={() => { postServicos() }}>Cadastrar Serviço</button>
    </>)


}