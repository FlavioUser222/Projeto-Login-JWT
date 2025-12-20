import Modal from "react-modal";
import SelectComponent from "./selectComponent";
import { useState } from "react";
import axios from "axios";

export default function ModalDashboard({ isOpen, onClose, value }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [duracao, setDuracao] = useState(0);
  const [horario, setHorario] = useState();

  async function postServicos() {
    try {
      let res = await axios.post("http://localhost:3000/servico", {
        nome,
        preco,
        duracao,
        horario,
      });

      alert("Servico Criado com sucesso", res);
    } catch (error) {
      console.error("erro ao criar ", error);
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
        <h2 style={{ color: "#fff" }}>Adicionar {value}</h2>

        <input
          type="text"
          value={nome}
          onChange={(text) => {
            setNome(text.target.value);
          }}
        />
        <input
          type="number"
          value={preco}
          onChange={(text) => {
            setPreco(text.target.value);
          }}
        />
        <input
          type="time"
          value={duracao}
          onChange={(text) => {
            setDuracao(text.target.value);
          }}
        />
        <input
          type="time"
          value={horario}
          onChange={(text) => {
            setHorario(text.target.value);
          }}
        />

        <button
          onClick={() => {
            postServicos();
          }}
        >
          Adicionar {value}
        </button>
      </div>
    </Modal>
  );
}
