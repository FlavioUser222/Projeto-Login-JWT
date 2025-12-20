export default function SelectComponent({ label, value, onChange, options }) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <select
        name=""
        id=""
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          Escolher {label}
        </option>
        {options.map((profissional) => (
          <option key={profissional.id} value={profissional.id}>
            {profissional.nome}
          </option>
        ))}
      </select>
    </>
  );
}
