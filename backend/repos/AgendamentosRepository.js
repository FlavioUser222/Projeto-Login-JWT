const db = require("../services/conectionDB");

class AgendamentosRepository {

  async listarAgendamentos() {
    const { rows } = await db.query("SELECT * FROM agendamentos");
    return rows;
  }
  async criarAgendamentos(
    cliente_id,
    barbeiro_id,
    servico_id,
    hora,
    valor,
    status
  ) {
    const { rows } = await db.query(
      `INSERT INTO agendamentos (cliente_id, barbeiro_id, servico_id, hora, valor, status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [cliente_id, barbeiro_id, servico_id, hora, valor, status]
    );
    return rows[0].id 
  }
}

module.exports = new AgendamentosRepository()