import useMeusAgendamentos from "../hooks/useMeusAgendamentos"

export default function MeusAgendamentos() {
    let meusAgendamentos = useMeusAgendamentos()
    return (
        <div className="container">

            {
                meusAgendamentos.map(agendamento => {
                    return (
                        <div>
                            <h1>{agendamento.valor}</h1>
                            <p>{agendamento.servico_id}</p>
                            <p>{agendamento.status}</p>
                        </div>

                    )
                })
            }



        </div>
    )
}