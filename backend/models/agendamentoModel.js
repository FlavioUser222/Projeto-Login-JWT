class Agendamento {

    constructor() {
        this.cliente_id = null
        this.barbeiro_id = null
        this.servico_id = null
        this.data = ""
        this.hora = ""
        this.valor = 0
        this.status = "pendente"
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