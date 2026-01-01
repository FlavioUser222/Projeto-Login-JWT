import TabLateral from "./components/tabDashboard";
import HeaderDashboard from "./components/headerDashboard";
import CardDashboard from "./components/cardDashboard";
import ContainerDashboard from "./components/containerDashboard";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Dashboard() {
  let [totalClientes, setTotalClientes] = useState([]);
  let [totalServico, setTotalServico] = useState([]);
  let [totalFuncionario, setTotalFuncionario] = useState([]);

  useEffect(() => {
    async function fetchTotalClientes() {
      let res = await axios.get("http://localhost:3000/totalAgendamentos");
      setTotalClientes(res.data);
    }
    async function fetchTotalServicos() {
      let res = await axios.get("http://localhost:3000/totalservicos");
      setTotalServico(res.data);
    }
    async function fetchTotalFuncionarios() {
      let res = await axios.get("http://localhost:3000/totalfuncionarios");
      setTotalFuncionario(res.data);
    }

    fetchTotalClientes();
    fetchTotalServicos();
    fetchTotalFuncionarios();
  }, []);

  return (
    <>
      <HeaderDashboard />
      <TabLateral />
      <ContainerDashboard>
        <CardDashboard title={"Total de clientes"} value={totalClientes} />
        <CardDashboard title={"Total de Servicos"} value={totalServico} />
        <CardDashboard title={"Funcionários"} value={totalFuncionario} />
      </ContainerDashboard>
    </>
  );
}
