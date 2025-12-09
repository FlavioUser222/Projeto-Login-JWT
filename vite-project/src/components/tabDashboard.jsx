import ButtonTabs from "./buttonTabs";
import { Link } from "react-router-dom"

export default function TabLateral() {

    return (

        <div className="lateral-bar">
            <div className="tab-container">
                <Link to="/dashboard" >Dashboard</Link>
                <Link to="/dashboard" >Agendamentos</Link>
                <Link to="/servicos/dashboard" >Servicos</Link>
                <Link to="/dashboard" >Funcionarios</Link>
                <hr />
            </div>
        </div>
    )



}