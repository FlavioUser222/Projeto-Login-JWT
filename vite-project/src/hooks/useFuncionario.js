import { useEffect, useState } from "react";
import axios from "axios";

export default function useFuncionario() {
  const [funcionario, setFuncionario] = useState([]);

  useEffect(() => {
    async function fetchServicos() {
      let res = await axios("http://localhost:3000/funcionarios");
      setFuncionario(res.data);
    }
    fetchServicos();
  }, []);

  return funcionario;
}
