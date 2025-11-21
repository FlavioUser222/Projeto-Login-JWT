class User {

    constructor() {
        this.usuarios = []
    }

    criarUsuario(email, senha) {
        this.usuarios.push({ email, senha })
        return { email, senha }
    }

    listarUsuarios() {
        return this.usuarios
    }


    encontrarUsuario(email) {
        return this.usuarios.find(u => u.email === email)
    }


}

module.exports = { User }









