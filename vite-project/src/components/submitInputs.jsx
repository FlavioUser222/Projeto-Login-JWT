
export default function SubmitInput({ nome, preco, duracao }) {
    const handleChange = (event) => {
        const { nome, preco, duracao } = event.target
    }

    const handleSubmit = (event) => {
        




    }


    return (<>
        <input type="text" value={nome} onChange={handleChange} />
        <input type="number" value={preco} onChange={handleChange} />
        <input type="number" value={duracao} onChange={handleChange} />
        <button onClick={() => { handleSubmit }}>Cadastrar {tipo}</button>
    </>
    )
}