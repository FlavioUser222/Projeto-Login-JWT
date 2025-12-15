
class Servicos {

    constructor() {
        this.Servicos = []
    }

    criarServico(nome, preco, duracao,horario) {
        if (!nome, !preco, !duracao,!horario) {
            throw new Error("Todos os campos sao obrigatorios!")
        }
        const servicos = {
            nome,
            preco,
            duracao,
            horario
        }
        this.Servicos.push(servicos)
    }

    listarServico() {
        return this.Servicos
    }

   

}

module.exports = { Servicos }



