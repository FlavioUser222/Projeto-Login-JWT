export default function CardDashboard({ title, value }) {



  
  return (
    <div className="cardDashboard">
      <div className="cardText">
        <h1>{title}</h1>
        <span>{value}</span>
      </div>
    </div>
  );
}
