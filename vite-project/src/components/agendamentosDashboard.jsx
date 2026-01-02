import { useState } from "react";
import useAgendamentos from "../hooks/useAgendamentos";
import DashboardLayout from "./dashboardLayout";
import InfoTable from "./infoTable";

export default function AgendamentosDashboard() {
  const [page, setPage] = useState(1);
  const limit = 6;

  const agendamentos = useAgendamentos(page,limit);

  return (
    <DashboardLayout>
      <div className="divServicos">
        <div className="top-content">
          <h1>Agendamentos</h1>
        </div>

        <InfoTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Barbeiro</th>
              <th>Serviço</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Horário</th>
            </tr>
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

        <button
          onClick={() => {
            setPage((p) => Math.max(1, p - 1));
          }}
          disabled={page === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => {
            setPage((p) => Math.max(1, p + 1));
          }}
        >
          Próximo {page}
        </button>
      </div>
    </DashboardLayout>
  );
}
