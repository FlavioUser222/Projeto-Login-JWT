import { useState, useEffect } from 'react'
import axios from 'axios'


function Home() {

    let [dados, setDados] = useState([])

    useEffect(() => {
        async function fetchServicos() {
            let res = await axios('http://localhost:3000/servicos')

            setDados(res.data)
        }

        fetchServicos()

    }, [])

    return (
        <>
            <div className='mainContainer'>
                <h1>Barber</h1>

                {
                    dados.map(dado => (<>
                        <div className='mainDados'>
                            <h1>{dado.nome}</h1>
                            <p>{dado.preco}</p>
                        </div>
                    </>))
                }

            </div>
        </>
    )
}

export default Home
