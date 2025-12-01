import { useState, useEffect } from 'react'




useEffect(() => {
    async function fetchServicos() {
        let res = await axios('http://localhost:3000/servicos')
        let dados = await res.json()
        return dados
    }

    fetchServicos()

}, [])

function Home() {

    return (
        <>
            <div>
                <h1>Barber</h1>
                {
                    dados.map(dado => (<>
                        <h1>{dado.nome}</h1>
                        <h1>{dado.preco}</h1>
                    </>))
                }

            </div>
        </>
    )
}

export default Home
