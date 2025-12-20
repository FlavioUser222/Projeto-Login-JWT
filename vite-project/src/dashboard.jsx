import TabLateral from "./components/tabDashboard";
import HeaderDashboard from "./components/headerDashboard";
import CardDashboard from "./components/cardDashboard";
import ContainerDashboard from "./components/containerDashboard";

export default function Dashboard() {
  return (
    <>
      <HeaderDashboard />
      <TabLateral />
      <ContainerDashboard>
        <CardDashboard title={"Total de clientes"} value={1000} />
        <CardDashboard title={"Total de Servicos"} value={1200} />
        <CardDashboard title={"Funcionários"} value={4} />
      </ContainerDashboard>
    </>
  );
}
