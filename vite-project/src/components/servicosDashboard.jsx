import useServicos from "../hooks/useServicos";
import DashboardLayout from "./dashboardLayout";
import { useState } from "react";
import ModalDashboard from "../components/modalDashboard";
import InfoTable from "../components/infoTable";

export default function ServicosDashboard() {
  const servicos = useServicos();
  const [isOpen, setModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="divServicos">
        <div className="top-content">
          <h1>Servicos</h1>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Adicionar servico
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
              <th>Preço</th>
              <th>Duração</th>
              <th>Horario</th>
            </tr>
          </thead>

          <tbody>
            {servicos.map((servico, index) => (
              <tr key={servico.id ?? index}>
                <td>{servico.nome}</td>
                <td>{servico.preco}</td>
                <td>{servico.duracao}</td>
                <td>{servico.horario}</td>
              </tr>
            ))}
          </tbody>
        </InfoTable>
      </div>
    </DashboardLayout>
  );
}
