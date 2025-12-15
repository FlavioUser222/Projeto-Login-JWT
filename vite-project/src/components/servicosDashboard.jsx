import axios from "axios";
import { useState } from "react";
import TabLateral from "./tabDashboard";
import HeaderDashboard from "./headerDashboard";
import ContainerDashboard from "./containerDashboard";
import InfoTable from "./infoTable";
import useServicos from "../hooks/useServicos";

export default function ServicosDashboard() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [duracao, setDuracao] = useState(0);
  const [horario, setHorario] = useState();

  const servicos = useServicos();

  async function postServicos() {
    try {
      let res = await axios.post("http://localhost:3000/servico", {
        nome,
        preco,
        duracao,
        horario,
      });

      alert("Servico Criado com sucesso", res);
    } catch (error) {
      console.error("erro ao criar ", error);
    }
  }

  return (
    <>
      <HeaderDashboard />
      <TabLateral />

      <ContainerDashboard>
        <div className="divServicos">
          <div className="top-content">
            <h1>Servicos</h1>
            <button>Adicionar Servicos</button>
          </div>

          <InfoTable servicos={servicos}></InfoTable>
        </div>
        {/* 
           <input
            type="text"
            value={nome}
            onChange={(text) => {
              setNome(text.target.value);
            }}
          />
          <input
            type="number"
            value={preco}
            onChange={(text) => {
              setPreco(text.target.value);
            }}
          />
          <input
            type="number"
            value={duracao}
            onChange={(text) => {
              setDuracao(text.target.value);
            }}
          />
          <input
            type="time"
            value={horario}
            onChange={(text) => {
              setHorario(text.target.value);
            }}
          />
          <button
            onClick={() => {
              postServicos();
            }}
          >
            Cadastrar
          </button> 
        </div> */}
      </ContainerDashboard>
    </>
  );
}
