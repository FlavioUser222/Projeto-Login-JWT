import { useState ,useEffect} from "react"
import axios from 'axios'


export default function useMeusAgendamentos() {

    const [meusAgendamentos, setMeusAgendamentos] = useState([])

    
    useEffect(() => {
        async function fetchAgendamentos() {
            let res = await axios('https://projeto-login-jwt.onrender.com/userAgendamento')
            console.log(res.data)
            setMeusAgendamentos(res.data)
        }
        
        fetchAgendamentos()
    }, [])


    return meusAgendamentos







}