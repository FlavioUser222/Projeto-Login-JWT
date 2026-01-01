import DashboardLayout from "./dashboardLayout";
import InfoTable from "./infoTable";
import useFuncionario from "../hooks/useFuncionario";
import { useState } from "react";
import { formatDate } from "./formatDate";
import { ModalDashboardFuncionario } from "./modalDashboardFuncionario";

export default function FuncionarioDashboard() {
  const funcionario = useFuncionario();
  const [isOpen, setModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="divServicos">
        <div className="top-content">
          <h1>Funcionarios</h1>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Adicionar funcionário
          </button>
        </div>
        <ModalDashboardFuncionario
          isOpen={isOpen}
          OnClose={() => {
            setModalOpen(false);
          }}
        />

        <InfoTable>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Admissao</th>
            </tr>
          </thead>

          <tbody>
            {funcionario.map((funcionario, index) => (
              <tr key={funcionario.id ?? index}>
                <td>{funcionario.nome}</td>
                <td>{formatDate(funcionario.admissao)}</td>
              </tr>
            ))}
          </tbody>
        </InfoTable>
      </div>
    </DashboardLayout>
  );
}
