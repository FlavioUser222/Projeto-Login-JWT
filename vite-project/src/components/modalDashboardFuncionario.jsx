import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";

export function ModalDashboardFuncionario({ isOpen, OnClose }) {
  const [nome, setNome] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [admissao] = useState(new Date());

  async function postFuncionario() {
    try {
      let res = await axios.post("http://localhost:3000/funcionario", {
        nome,
        facebook,
        instagram,
        whatsapp,
        admissao,
      });

      alert("Funcionario Criado com sucesso", res);
    } catch (error) {
      console.error("erro ao criar ", error);
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={OnClose}
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
        <h2 style={{ color: "#fff" }}>Adicionar Funcionario</h2>

        <input
          type="text"
          value={nome}
          placeholder="Nome"
          onChange={(text) => {
            setNome(text.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Facebook"
          value={facebook}
          onChange={(text) => {
            setFacebook(text.target.value);
          }}
        />
        <input
          type="text"
          value={instagram}
          placeholder="Instagram"
          onChange={(text) => {
            setInstagram(text.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Whatsapp"
          value={whatsapp}
          onChange={(text) => {
            setWhatsapp(text.target.value);
          }}
        />

        <button
          onClick={() => {
            postFuncionario();
          }}
        >
          Adicionar Funcionario
        </button>
      </div>
    </Modal>
  );
}
