import { useState } from "react";
import DashboardLayout from "./dashboardLayout";
import InfoTable from "./infoTable";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function AgendamentosDashboard() {
  const [page, setPage] = useState(1);
  const [hidden, setHidden] = useState(null);
  const limit = 6;
  const offset = (page - 1) * limit;

  const { data } = useQuery({
    queryKey: ["agendamentos", page],
    queryFn: () => fetchAgendamentos(limit, offset),
    refetchInterval: 5000,
  });

  async function fetchAgendamentos(limit, offset) {
    try {
      let res = await axios.get(
        `http://localhost:3000/agendamentos?limit=${limit}&offset=${offset}`
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

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
  function changeNextPage(page) {
    setPage(page + 1);
  }
  function changePreviousPage(page) {
    setPage(page - 1);
  }

  function toggleMenu(id) {
    setHidden(hidden === id ? null : id);
  }

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
              <th>Configuraçoess</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((agendamento, index) => (
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
                      toggleMenu(agendamento.id);
                    }}
                  >
                    :
                  </button>
                  <div
                    className="select-config"
                    style={{
                      display: hidden === agendamento.id ? "flex" : "none",
                      flexDirection: "column",
                      position: "absolute",
                      top: "100%",
                      zIndex: 999,
                    }}
                  >
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
            changePreviousPage(page);
          }}
          disabled={page === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => {
            changeNextPage(page);
          }}
        >
        Próximo {page}
        </button>
      </div>
    </DashboardLayout>
  );
}
