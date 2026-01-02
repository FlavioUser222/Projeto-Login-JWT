const db = require("../services/conectionDB");

class AgendamentosRepository {
  async listarAgendamentos(limit = 20, offset = 0) {
    const { rows } = await db.query(
      "SELECT*FROM agendamentos ORDER BY id LIMIT $1 OFFSET $2",
      [limit, offset]
    );
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
    return rows[0].id;
  }

  async getTotalAgendamentos() {
    let { rows } = await db.query(
      `SELECT COUNT(id) AS total FROM agendamentos`
    );
    console.debug(rows);
    return rows[0].total;
  }
}

module.exports = new AgendamentosRepository();
