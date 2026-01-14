import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import SelectComponent from "./selectComponent";
import { formatTime } from "./formatTime";

export default function ModalHome({
  isOpen,
  onClose,
  servicos,
  profissionais,
}) {
  let [nome, setNome] = useState("");
  let [selectedIdProfissional, setSelectedIdProfissional] = useState("");
  let [selectedHorario, setSelectedHorario] = useState("");
  let [selectedIdServico, setSelectedIdServico] = useState("");


  const handleChangeProfissional = (ev) => {
    setSelectedIdProfissional(ev.target.value);
  };

  const handleChangeServico = (ev) => {
    setSelectedIdServico(ev.target.value);
  };

  
  async function postAgendamento() {
    try {
      let res = await axios.post("https://projeto-login-jwt.onrender.com/agendamento", {
        cliente_id: nome,
        barbeiro_id: selectedIdProfissional,
        servico_id: selectedIdServico,
        horaInicial: selectedHorario,
        horaFinal:"15:38:00",
        valor: 30,
        status: "Em andamento",
      });

      if (res.status == "201") {
        alert("Agendamento criado com sucesso");
        onClose()
      }
    } catch (error) {
      console.log(error);
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
          maxWidth: "620px",
          maxHeight: "600px",
          width: "100%",
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
            <SelectComponent
              label={"Profissional"}
              value={selectedIdProfissional}
              onChange={handleChangeProfissional}
              options={profissionais}
            ></SelectComponent>
          </div>
          <div className="select-servico">
            <SelectComponent
              label={"Servicos"}
              value={selectedIdServico}
              onChange={handleChangeServico}
              options={servicos}
            ></SelectComponent>
          </div>
        </div>
        <label htmlFor="">Horario</label>
        <ul>
          {servicos.map((servico, index) => (
            <li key={index}>
              <label htmlFor="">
                <input
                  type="radio"
                  name="horario"
                  value={servico.horario}
                  onChange={() => {
                    setSelectedHorario(servico.horario);
                  }}
                />
                {formatTime(servico.horario) + "h"}
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
