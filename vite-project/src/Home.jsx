import { useState } from "react";
import CardServicos from "./components/cardServicos";
import CardFuncionarios from "./components/cardFuncionarios";
import useServicos from "./hooks/useServicos";
import useProfissionais from "./hooks/useProfissionais";
import ModalHome from "./components/modalHome";



function Home() {
    const servicos = useServicos();
    const profissionais = useProfissionais();
    const [modal, setModal] = useState(false);

    return (
        <>
            <ModalHome
                isOpen={modal}
                onClose={() => {
                    setModal(false);
                }}
                servicos={servicos}
                profissionais={profissionais}
            />
            <header>
                <ul className="headerUl">
                    <li>
                        <img src="../public/assets/778 branco.png" alt="" />
                    </li>
                    <li>
                        <a href="">Serviços</a>
                    </li>
                    <li>
                        <a href="">Nossa Equipe</a>
                    </li>
                    <li>
                        <a href="">Contatos</a>
                    </li>
                </ul>

                <button
                    onClick={() => {
                        setModal(true);
                    }}
                >
                    Agendar Horários
                </button>
            </header>

            <div className="mainContainer">
                <div className="mainContent">
                    <h1>Barber Shop</h1>
                    <p>Horário de funcionamento das 08:00 às 19:00</p>
                    <button
                        onClick={() => {
                            setModal(true);
                        }}
                    >
                        Agendar Horario
                    </button>
                </div>

                <h1>Serviços</h1>
                <div className="container-cards">
                    {servicos.map((servico) => (
                        <CardServicos
                            key={servico.id}
                            nome={servico.nome}
                            preco={servico.preco}
                        ></CardServicos>
                    ))}
                </div>
                <h1>Nossa Equipe</h1>

                <div className="container-equipe">
                    <div className="container-equipe">
                        <div className="container-cards">
                            <div className="cards-track">
                                {profissionais.map((profissional) => (
                                    <>
                                        <CardFuncionarios
                                            nome={profissional.nome}
                                        ></CardFuncionarios>
                                        <CardFuncionarios
                                            nome={profissional.nome}
                                        ></CardFuncionarios>
                                        <CardFuncionarios
                                            nome={profissional.nome}
                                        ></CardFuncionarios>
                                        <CardFuncionarios
                                            nome={profissional.nome}
                                        ></CardFuncionarios>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <h1>Unidades</h1>
                <div className="container-endereco">
                    <div className="img-endereco">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7563.581638804753!2d-46.516329604366014!3d-18.5834670606245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ae8ad03bba98e3%3A0x69765dec93dc8aeb!2sPrime%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1765210617246!5m2!1spt-BR!2sbr" style={{ width: '300px', height: '300px', borderRadius: '8px' }} ></iframe>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7563.581638804753!2d-46.516329604366014!3d-18.5834670606245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ae8ad03bba98e3%3A0x69765dec93dc8aeb!2sPrime%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1765210617246!5m2!1spt-BR!2sbr" style={{ width: '300px', height: '300px', borderRadius: '8px' }} ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
