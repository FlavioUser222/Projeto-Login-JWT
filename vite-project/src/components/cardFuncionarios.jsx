import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function CardFuncionarios({
  nome,
  facebook,
  instagram,
  whatsapp,
}) {
  return (
    <div className="cards">
      <div className="img-card">
        <h1>{nome}</h1>
      </div>

      <div className="redes-card">
        <ul className="redes-ul">
          <li>
            <a href={facebook}>
              <Facebook size={24} color="white" />
            </a>
          </li>
          <li>
            <a href={instagram}>
              <Instagram size={24} color="white" />
            </a>
          </li>
          <li>
            <a href={whatsapp}>
              <MessageCircle size={24} color="white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
