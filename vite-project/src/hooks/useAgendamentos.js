import { useEffect, useState } from "react";
import axios from "axios";

export default function useAgendamentos(page = 0, limit) {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    async function fetchServicos() {
      let res = await axios("https://projeto-login-jwt.onrender.com/agendamentos", {
        params: {
          page: page,
          limit: limit,
        },
      });
      
      setAgendamentos(res.data);
    }
    fetchServicos();
  }, [page, limit]);

  return agendamentos;
}
