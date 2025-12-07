import { useEffect, useState } from "react";
import axios from "axios";


export default function useServicos() {
    const [servicos, setServicos] = useState([])

    useEffect(() => {
        async function fetchServicos() {
            let res = await axios('http://localhost:3000/servicos')
            setServicos(res.data)
        }

        fetchServicos()
    },[])


    return servicos


}