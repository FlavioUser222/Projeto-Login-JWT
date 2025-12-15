export default function InfoTable({ servicos }) {
  return (
    <div className="info-table">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Duração</th>
          </tr>
        </thead>

        <tbody>
          {servicos.map((servico, index) => (
            <tr key={servico.id ?? index}>
              <td>{servico.nome}</td>
              <td>{servico.preco}</td>
              <td>{servico.duracao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
