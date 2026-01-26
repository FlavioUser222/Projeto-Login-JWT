

async function useMeusAgendamentos() {

    const [meusAgendamentos, setMeusAgendamentos] = useState([])

    
    useEffect(() => {
        async function fetchAgendamentos() {
            let res = await axios('https://projeto-login-jwt.onrender.com/servicos')
            setMeusAgendamentos(res.data)
        }
        
        fetchAgendamentos()
    }, [])


    return meusAgendamentos







}