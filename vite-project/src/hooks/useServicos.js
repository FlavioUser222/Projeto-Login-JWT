import { useEffect, useState } from "react";
import axios from "axios";


export default function useServicos() {
    const [servicos, setServicos] = useState([])

    useEffect(() => {
        async function fetchServicos() {
            let res = await axios('https://projeto-login-jwt.onrender.com/servicos')
            setServicos(res.data)
        }
        fetchServicos()
    },[])


    return servicos


}