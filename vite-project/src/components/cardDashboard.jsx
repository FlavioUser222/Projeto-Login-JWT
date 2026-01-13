import { CircleUserRound } from 'lucide-react'


export default function CardDashboard({ title, value, icon }) {
  return (
    <div className="cardDashboard">
      <div className="cardText">
        <h1>{title}</h1>
        <div className="wrapper-icon">
          {icon}
          <span>{value}</span>
        </div>
      </div>
    </div>
  );
}
