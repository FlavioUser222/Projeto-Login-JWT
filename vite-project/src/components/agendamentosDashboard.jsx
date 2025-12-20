import useAgendamentos from "../hooks/useAgendamentos";
import DashboardLayout from "./dashboardLayout";
import InfoTable from "./infoTable";

export default function AgendamentosDashboard() {
  const agendamentos = useAgendamentos();

  return (
    <DashboardLayout>
      <div className="divServicos">
        <div className="top-content">
          <h1>Agendamentos</h1>
        </div>
        <InfoTable>
          <thead>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Duração</th>
                <th>Horário</th>
              </tr>
            </thead>
          </thead>

          <tbody>
            {agendamentos.map((agendamento, index) => (
              <tr key={agendamento.id ?? index}>
                <td>{agendamento.cliente_id}</td>
                <td>{agendamento.barbeiro_id}</td>
                <td>{agendamento.servico_id}</td>
                <td>{agendamento.valor}</td>
                <td>{agendamento.status}</td>
                <td>{agendamento.hora}</td>
              </tr>
            ))}
          </tbody>
        </InfoTable>
      </div>
    </DashboardLayout>
  );
}
