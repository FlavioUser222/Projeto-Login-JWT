import { useEffect, useState } from "react";
import axios from "axios";

export default function useAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    async function fetchServicos() {
      let res = await axios("http://localhost:3000/agendamentos");
      setAgendamentos(res.data);
    }
    fetchServicos();
  }, []);

  return agendamentos;
}
