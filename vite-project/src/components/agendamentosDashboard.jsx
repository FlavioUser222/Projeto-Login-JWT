import { useState } from "react";
import useAgendamentos from "../hooks/useAgendamentos";
import DashboardLayout from "./dashboardLayout";
import InfoTable from "./infoTable";
import axios from "axios";

async function changeStatus(status, id) {
  try {
    let res = await axios.patch(
      `http://localhost:3000/agendamento/status/${id}`,
      {
        status,
      }
    );
    console.log(res);
    alert("Status alterado com sucesso!");
  } catch (error) {
    console.log(error);
  }
}

async function deleteAgendamento(id) {
  try {
    let res = await axios.delete(`http://localhost:3000/agendamentos/${id}`);
    console.log(res);
    alert("Agendamento deletado com sucesso!");
  } catch (error) {
    console.log(error);
  }
}

export default function AgendamentosDashboard() {
  const [page, setPage] = useState(1);
  const [hidden, setHidden] = useState(false);

  const estilo = {
    display: !hidden ? "none" : "flex",
    flexDirection: "collumn",
    position: "absolute",
    top: "100%",
    zIndex: "999",
  };

  const limit = 6;

  const agendamentos = useAgendamentos(page, limit);

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
              <th>Confi..</th>
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
                <td style={{ position: "relative" }}>
                  <button
                    onClick={() => {
                      setHidden(!hidden);
                    }}
                  >
                    :
                  </button>
                  <div className="select-config" style={estilo}>
                    <button
                      onClick={() => {
                        changeStatus("Concluido", Number(agendamento.id));
                      }}
                    >
                      Mudar Status
                    </button>
                    
                    <button
                      onClick={() => {
                        deleteAgendamento(agendamento.id);
                      }}
                    >
                      Excluir agendamento
                    </button>
                  </div>
                </td>
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
