const db = require("../services/conectionDB");

class FuncionarioRepository {

  async listarFuncionarios() {
    let { rows } = await db.query(`SELECT * FROM barbeiros`);
    return rows;
  }

  async postarFuncionario(nome, facebook, instagram, whatsapp, admissao) {
    let { rows } = await db.query(
      `INSERT INTO barbeiros(nome,facebook,instagram,whatsapp,admissao) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [nome, facebook, instagram, whatsapp, admissao]
    );

    return rows[0];
  }
}

module.exports = new FuncionarioRepository();
