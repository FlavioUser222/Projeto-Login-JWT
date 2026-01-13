import TabLateral from "./components/tabDashboard";
import HeaderDashboard from "./components/headerDashboard";
import CardDashboard from "./components/cardDashboard";
import ContainerDashboard from "./components/containerDashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircleUserRound, IdCardLanyard, Toolbox } from "lucide-react";


export default function Dashboard() {
  let [totalClientes, setTotalClientes] = useState([]);
  let [totalServico, setTotalServico] = useState([]);
  let [totalFuncionario, setTotalFuncionario] = useState([]);

  useEffect(() => {
    async function fetchTotalClientes() {
      let res = await axios.get("https://projeto-login-jwt.onrender.com/totalAgendamentos");
      setTotalClientes(res.data);
    }
    async function fetchTotalServicos() {
      let res = await axios.get("https://projeto-login-jwt.onrender.com/totalservicos");
      setTotalServico(res.data);
    }
    async function fetchTotalFuncionarios() {
      let res = await axios.get("https://projeto-login-jwt.onrender.com/totalfuncionarios");
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
        <CardDashboard title={"Total de clientes"} value={totalClientes} icon={<CircleUserRound color="#ffffff" size={35} />} />
        <CardDashboard title={"Total de Servicos"} value={totalServico} icon={<Toolbox color="#ffffff" size={35} />} />
        <CardDashboard title={"Funcionários"} value={totalFuncionario} icon={<IdCardLanyard color="#ffffff" size={35} />} />
      </ContainerDashboard>
    </>
  );
}
