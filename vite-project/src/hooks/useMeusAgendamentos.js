

async function useMeusAgendamentos() {

    const [meusAgendamentos, setMeusAgendamentos] = useState([])

    
    useEffect(() => {
        async function fetchAgendamentos() {
            let res = await axios('https://projeto-login-jwt.onrender.com/userAgendamentos')
            setMeusAgendamentos(res.data)
        }
        
        fetchAgendamentos()
    }, [])


    return meusAgendamentos







}