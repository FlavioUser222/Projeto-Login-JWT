
class Servicos {

    constructor() {
        this.Servicos = []
    }

    criarServico(nome, preco, duracao) {
        if (!nome, !preco, !duracao) {
            throw new Error("Todos os campos sao obrigatorios!")
        }
        const servicos = {
            nome,
            preco,
            duracao
        }


        this.Servicos.push(servicos)
    }

    listarServico() {
        return this.Servicos
    }

}

module.exports = { Servicos }



