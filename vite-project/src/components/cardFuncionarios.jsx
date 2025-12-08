

export default function CardFuncionarios({ nome }) {
    return (
        <div className="cards">
            <div className="img-card">
                <h1>{nome}</h1>
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
    )
}