class Agendamento {
  constructor() {
    this.agendamentos = [];
  }

  criarAgendamento(cliente_id, barbeiro_id, servico_id, hora, valor, status) {
    let agendamentosObj = {
      cliente_id,
      barbeiro_id,
      servico_id,
      hora,
      valor,
      status,
    };

    this.agendamentos.push(agendamentosObj);
  }

  validarAgendamentos(
    cliente_id,
    barbeiro_id,
    servico_id,
    hora,
    valor,
    status
  ) {
    if (
      !cliente_id ||
      !barbeiro_id ||
      !servico_id ||
      !hora ||
      !valor ||
      !status
    ) {
      throw new Error("Todos os campos são obrigatorios!");
    }
  }

  listarAgendamentos() {
    return this.agendamentos;
  }
}

module.exports = {
  Agendamento,
};
