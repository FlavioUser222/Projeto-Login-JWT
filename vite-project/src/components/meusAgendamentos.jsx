export default function MeusAgendamentos() {
    let meusAgendamentos = useMeusAgendamentos()
    return (
        <div className="container">

            {
                meusAgendamentos.map(agendamento => {
                    return (
                        <div>
                            <h1>agendamento.valor</h1>
                            <h1>agendamento.status</h1>

                        </div>

                    )
                })
            }



        </div>
    )
}