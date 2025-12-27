const db = require("../services/conectionDB");

class ServicosRepository {
  async listarServicos() {
    const { rows } = await db.query("SELECT* FROM servicos");
    return rows;
  }

  async criarServico(nome, preco, duracao, horario) {
    const { rows } = await db.query(
      `INSERT INTO servicos (nome, preco, duracao, horario) VALUES($1,$2,$3,$4) RETURNING *`,
      [nome, preco, duracao, horario]
    );
    return rows[0];
  }

  async getTotalServicos() {
    const { rows } = await db.query(`
        SELECT COUNT(*) AS total from servicos
      `);
    return rows[0].total;
  }

}

module.exports = new ServicosRepository();
