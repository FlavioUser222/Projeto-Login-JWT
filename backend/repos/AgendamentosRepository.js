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

  async changeStatusAgendamentos(status, id) {
    let { rows } = await db.query(
      `UPDATE agendamentos 
      SET status = $1 
      WHERE id = $2 
      RETURNING *`,
      [status, id]
    );
    console.log(rows);
    return rows[0];
  }
  async deleteAgendamento(id) {
    let { rows } = await db.query(`DELETE FROM agendamentos WHERE id = $1`, [
      id,
    ]);

    return rows[0];
  }
}

module.exports = new AgendamentosRepository();
