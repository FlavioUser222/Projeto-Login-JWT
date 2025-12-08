import ButtonTabs from "./buttonTabs";


export default function TabLateral() {

    return (

        <div className="lateral-bar">
            <div className="tab-container">
                <h2>Geral</h2>
                <ButtonTabs nome={"Dashboard"} />
                <ButtonTabs nome={"Agendamentos"} />
                <ButtonTabs nome={"Serviços"} />
                <ButtonTabs nome={"Funcionários"} />
                <hr />
            </div>
        </div>
    )



}