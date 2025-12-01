class Agendamento {

    constructor() {
        this.agendamentos = []
    }

    criarAgendamento(cliente_id, barbeiro_id, servico_id, data, hora, valor, status) {

        let agendamentosObj = {
            cliente_id,
            barbeiro_id,
            servico_id,
            data,
            hora,
            valor,
            status
        }

        this.agendamentos.push(agendamentosObj)
    }

    listarAgendamentos() {
        return this.agendamentos
    }

}

module.exports = {
    Agendamento
}