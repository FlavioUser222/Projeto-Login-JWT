import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

export default function ModalHome({
  isOpen,
  onClose,
  servicos,
  profissionais,
}) {
  let [nome, setNome] = useState("");
  let [selectedIdProfissional, setSelectedIdProfissional] = useState("");
  let [horarios] = useState(["8:00", "9:00", "10:00"]);
  let [selectedHorario, setSelectedHorario] = useState("");
  let [selectedIdServico, setSelectedIdServico] = useState("");

  const handleChangeProfissional = (ev) => {
    setSelectedIdProfissional(ev.target.value);
  };
  const handleChangeServico = (ev) => {
    setSelectedIdServico(ev.target.value);
  };

  async function postAgendamento() {
    let res = await axios.post("http://localhost:3000/agendamento", {
      nome,
      profissionalId: selectedIdProfissional,
      servicoId: selectedIdServico,
      hora: selectedHorario,
      valor: 30,
      status: "Em andamento",
    });

    if (res.status == "200") {
      alert("Agendamento enviado");
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        content: {
          width: "620px",
          height: "600px",
          margin: "auto",
          padding: "20px",
          borderRadius: "12px",
          border: "none",
          background: "#575656ff",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          overflow: "hidden",
        },
      }}
    >
      <div className="modal-container">
        <h2 style={{ color: "#fff" }}>Agendar Horário</h2>

        <label htmlFor="">Nome Completo</label>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(text) => setNome(text.target.value)}
        />
        <div className="wrapper-selects">
          <div className="select-profissional">
            <label htmlFor="">Profissional</label>
            <select
              name=""
              id=""
              value={selectedIdProfissional}
              onChange={handleChangeProfissional}
            >
              <option value="" selected disabled>
                Escolher profissional
              </option>
              {profissionais.map((profissional) => (
                <option key={profissional.id} value={profissional.id}>
                  {profissional.nome}
                </option>
              ))}
            </select>
          </div>
          <div className="select-servico">
            <label htmlFor="">Serviço</label>
            <select
              name=""
              id=""
              value={selectedIdServico}
              onChange={handleChangeServico}
            >
              <option value="" selected disabled>
                Escolher serviço
              </option>
              {servicos.map((servico) => (
                <option key={servico.id} value={servico.id}>
                  {servico.nome}
                </option>
              ))}
            </select>
          </div>
        </div>
        <label htmlFor="">Horario</label>
        <ul>
          {horarios.map((horario, index) => (
            <li key={index}>
              <label htmlFor="">
                <input
                  type="radio"
                  name="horario"
                  value={selectedHorario}
                  onChange={() => {
                    setSelectedHorario(horario);
                  }}
                />
                {horario}
              </label>
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            postAgendamento();
          }}
        >
          Agendar Horário
        </button>
      </div>
    </Modal>
  );
}
