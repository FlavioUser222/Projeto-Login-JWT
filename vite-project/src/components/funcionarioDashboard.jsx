import DashboardLayout from "./dashboardLayout";
import InfoTable from "./infoTable";
import useFuncionario from "../hooks/useFuncionario";
import { useState } from "react";
import ModalDashboard from "./modalDashboard";
import { formatDate } from "./formatDate";

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

        <ModalDashboard
          isOpen={isOpen}
          onClose={() => {
            setModalOpen(false);
          }}
          
          
        ></ModalDashboard>

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
                <td>{formatDate(funcionario.adimissao)}</td>
              </tr>
            ))}
          </tbody>
        </InfoTable>
      </div>
    </DashboardLayout>
  );
}
