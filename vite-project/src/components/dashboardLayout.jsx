import HeaderDashboard from "../components/headerDashboard";
import TabLateral from "../components/tabDashboard";
import ContainerDashboard from "../components/containerDashboard";

export default function DashboardLayout({ children }) {
  return (
    <>
      <HeaderDashboard />
      <TabLateral />
      <ContainerDashboard>{children}</ContainerDashboard>
    </>
  );
}
