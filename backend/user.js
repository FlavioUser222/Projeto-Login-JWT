export class User {
    constructor(nome, email, senha) {
        this.nome = nome
        this.email = email
        this.senha = senha
    }
    validarDados() {
        if (!this.nome || !this.email || !this.senha) {
            return false;
        }
        return true;
    }





}