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
            <header>
                <ul className='headerUl'>
                    <li><h1>Barber</h1></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Nossa Equipe</a></li>
                    <li><a href="">Contatos</a></li>
                </ul>

                <button>Agendar Horários</button>
            </header>

            <div className='mainContainer'>

                <div className="mainContent">
                    <h1>Barber Shop</h1>
                    <p>Horário de funcionamento das 08:00 às 19:00</p>
                    <button>Agendar Horario</button>
                </div>


                <h1>Serviços</h1>
                <div className="container-cards">
                    {
                        dados.map(dado => (<>
                            <div className='cardServicos'>
                                <div className="img-card"></div>
                                <div className="card-text">
                                    <h1>{dado.nome}</h1>
                                    <p>{dado.preco}</p>
                                </div>
                            </div>
                        </>))
                    }
                </div>


                <div className="container-equipe">
                    <h1>Nossa Equipe</h1>


                    <div className='cardEquipe'>
                        <div className="img-card">
                            <h1>Nome</h1>
                        </div>

                        <div className="redes-card">
                            <ul>
                                <li><a href=""><img src="" alt="" /></a></li>
                                <li><a href=""><img src="" alt="" /></a></li>
                                <li><a href=""><img src="" alt="" /></a></li>
                                <li><a href=""><img src="" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}

export default Home
