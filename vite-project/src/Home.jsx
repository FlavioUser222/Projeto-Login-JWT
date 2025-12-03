import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal';


function Home() {



    let [dados, setDados] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)


    useEffect(() => {
        async function fetchServicos() {
            let res = await axios('http://localhost:3000/servicos')
            setDados(res.data)
        }
        fetchServicos()
    }, [])
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Example Modal"
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                    },
                    content: {
                        width: "400px",
                        height: "250px",
                        margin: "auto",
                        padding: "20px",
                        borderRadius: "12px",
                        border: "none",
                        background: "#575656ff",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden"
                    }
                }}
            >

                <h2>Modal Content</h2>
                <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
            </Modal >

            <header>
                <ul className='headerUl'>
                    <li><img src="../public/assets/778 branco.png" alt="" /></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Nossa Equipe</a></li>
                    <li><a href="">Contatos</a></li>
                </ul>

                <button onClick={() => { setModalIsOpen(true) }}>Agendar Horários</button>
            </header>

            <div className='mainContainer'>

                <div className="mainContent">
                    <h1>Barber Shop</h1>
                    <p>Horário de funcionamento das 08:00 às 19:00</p>
                    <button onClick={() => { setModalIsOpen(true) }}>Agendar Horario</button>
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

                <h1>Nossa Equipe</h1>
                <div className="container-equipe">
                    <div className='container-cards'>
                        <div className="cards-track">
                            <div className="cards">
                                <div className="img-card">
                                    <h1>Nome</h1>
                                </div>
                                <div className="redes-card">
                                    <ul className='redes-ul'>
                                        <li><a href=""><img src="../public/assets/Vector.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/Vector.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/Vector.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/Vector.png" alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="img-card">
                                    <h1>Nome</h1>
                                </div>
                                <div className="redes-card">
                                    <ul className='redes-ul'>
                                        <li><a href=""><img src="../public/assets/Vector.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/Vector.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/Vector.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/Vector.png" alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="img-card">
                                    <h1>Nome</h1>
                                </div>
                                <div className="redes-card">
                                    <ul className='redes-ul'>
                                        <li><a href=""><img src="../public/assets/778 branco.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/778 branco.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/778 branco.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/778 branco.png" alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="img-card">
                                    <h1>Nome</h1>
                                </div>
                                <div className="redes-card">
                                    <ul className='redes-ul'>
                                        <li><a href=""><img src="../public/assets/778 branco.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/778 branco.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/778 branco.png" alt="" /></a></li>
                                        <li><a href=""><img src="../public/assets/778 branco.png" alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <h1>Unidades</h1>
                <div className="container-endereco">
                    <div className="img-endereco">
                        <img src="../public/assets/778 branco.png" alt="" />
                        <img src="../public/assets/778 branco.png" alt="" />
                    </div>


                </div>

            </div>
        </>
    )
}

export default Home
