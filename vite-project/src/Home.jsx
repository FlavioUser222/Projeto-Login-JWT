import { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from 'react-modal';


function Home() {
    let [servicos, setServicos] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    let [nome, setNome] = useState('')
    let [selectedIdProfissional, setSelectedIdProfissional] = useState('')
    let [profissional, setProficional] = useState([])
    let [horarios, setHorarios] = useState(['8:00', '9:00', '10:00'])
    let [selectedIdServico, setSelectedIdServico] = useState('')


    const handleChangeProfissional = (ev) => {
        setSelectedIdProfissional(ev.target.value)
    }
    const handleChangeServico = (ev) => {
        setSelectedIdServico(ev.target.value)
    }


    async function postAgendamento() {
        let res = await axios.post('http://localhost:3000/agendamento', {
            nome, selectedIdProfissional, selectedIdServico, profissional, horarios
        })

    }


    useEffect(() => {
        async function fetchServicos() {
            let res = await axios('http://localhost:3000/servicos')
            setServicos(res.data)
        }

        async function fetchProfissional() {
            let res = await axios('http://localhost:3000/servicos')
            setProficional(res.data)
        }

        fetchProfissional()
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
                        width: "620px",
                        height: "600px",
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
                        gap: '20px',
                        overflow: "hidden"
                    }
                }}>

                <div className="modal-content">
                    <h2 style={{ color: '#fff' }}>Agendar Horário</h2>

                    <label htmlFor="">Nome Completo</label>
                    <input type="text" placeholder='Nome' value={nome} onChange={text => setNome(text.target.value)} />
                    <label htmlFor="">Profissional</label>
                    <select name="" id="" value={selectedIdProfissional} onChange={handleChangeProfissional}>
                        <option value="" selected disabled>Escolher profissional</option>
                        {
                            profissional.map((profissional) => (
                                <option key={profissional.id} value={profissional.id}>
                                    {profissional.nome}
                                </option>
                            ))
                        }
                    </select>
                    <label htmlFor="">Serviço</label>
                    <select name="" id="" value={selectedIdServico} onChange={handleChangeServico}>
                        <option value="" selected disabled>Escolher serviço</option>
                        {
                            servicos.map((servico) => (
                                <option key={servico.id} value={servico.id}>
                                    {servico.nome}
                                </option>
                            ))
                        }
                    </select>
                    <label htmlFor="">Horario</label>
                    <ul>
                        {
                            horarios.map((horario) => (
                                <li><label htmlFor=""><input type="radio" name='horario' value={horario} />{horario}</label></li>
                            ))
                        }
                    </ul>

                    <button>Agendar Horário</button>
                </div>

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
                        servicos.map(servico => (<>
                            <div className='cardServicos'>
                                <div className="img-card"></div>
                                <div className="card-text">
                                    <h1>{servico.nome}</h1>
                                    <p>{servico.preco}</p>
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
        </>)
}

export default Home
