const db = require("../services/conectionDB");

class UserRepository {
  async criarUsuario(email, senha) {
    if (!email || !senha) {
      throw new Error("Digite um email ou senha validos");
    }
    const { rows } = await db.query(
      `INSERT INTO usuario (email,senha) VALUES($1,$2) RETURNING *`,
      [email, senha]
    );

    return rows[0].id;
  }

  async listarUsuarios() {
    const usuarios = await db.query(`SELECT * FROM usuario`);
    return usuarios;
  }

  async encontrarUsuario(email) {
    const usuarioEcontrado = await db.query(
      `SELECT * FROM usuario WHERE email = $1`,
      [email]
    );

    return usuarioEcontrado.rows[0];
  }
}

module.exports = new UserRepository();
