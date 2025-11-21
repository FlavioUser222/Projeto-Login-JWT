import { User } from "./user.js";


export class BancoDeUsuarios {
  constructor() {
    this.usuarios = []
  }
  
  cadastrarUsuario(nome, email, senha) {
    const existe = this.usuarios.find(u => u.email === email);
    if (existe) {
      console.log(" Usuário já cadastrado com este email.");
      return;
    }

    const novoUsuario = new User(nome, email, senha)
    this.usuarios.push(novoUsuario)
    console.log(" Usuário cadastrado com sucesso!")
  }

  login(email, senha) {
    const usuario = this.usuarios.find(u => u.email === email);
    if (!usuario) {
      console.log("Usuário não encontrado.");
      return;
    }
    usuario.entrarNaConta(email, senha);
  }

  listarUsuarios() {
    console.log("Lista de usuários cadastrados:")
    this.usuarios.forEach(u => {
      console.log(`- ${u.nome} (${u.email})`);
    });
  }

  removerUsuario(email) {
    const index = this.usuarios.findIndex(u => u.email === email)
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      console.log("🗑️ Usuário removido com sucesso!");
    } else {
      console.log("❌ Usuário não encontrado.");
    }
  }
}
