import ButtonTabs from "./buttonTabs";
import { Link } from "react-router-dom"

export default function TabLateral() {

    return (

        <div className="lateral-bar">
            <div className="tab-container">
                <Link to="/dashboard" >Dashboard</Link>
                <ButtonTabs nome={"Agendamentos"} />
                <Link to="/servicos/dashboard" >Servicos</Link>
                <ButtonTabs nome={"Funcionários"} />
                <hr />
            </div>
        </div>
    )



}