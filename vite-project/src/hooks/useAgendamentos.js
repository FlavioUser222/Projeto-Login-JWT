import { useEffect, useState } from "react";
import axios from "axios";

export default function useAgendamentos(page=0,limit=20) {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    async function fetchServicos() {
      let res = await axios("http://localhost:3000/agendamentos",{
        params:{
          page:page,
          limit:limit
        }
      });
      setAgendamentos(res.data);
    }
    fetchServicos();
  }, [page,limit]);

  return agendamentos;
}
