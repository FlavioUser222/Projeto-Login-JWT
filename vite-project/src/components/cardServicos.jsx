import { formatTime } from "./formatTime";


export default function CardServicos({ nome, preco, tempo }) {
  return (
    <div className="cardServicos">
      <div className="img-card"></div>
      <div className="card-text">
        <h1>{nome}</h1>
        <div className="wrapper-values">
          <p>Preço do Serviço R${preco}</p>
          <p>{formatTime(tempo)} minutos</p>
        </div>
      </div>
    </div>
  );
}
