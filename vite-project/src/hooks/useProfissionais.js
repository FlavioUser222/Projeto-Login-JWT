import { useEffect, useState } from "react";
import axios from "axios";

export default function useProfissionais() {
    const [profissionais, setProfissionais] = useState([])

    useEffect(() => {
        async function fetchProfissionais() {
            let res = await axios('http://localhost:3000/servicos')
            setProfissionais(res.data)
        }

        fetchProfissionais()
    }, [])

    return profissionais


}