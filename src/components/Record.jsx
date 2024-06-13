import { Link } from "react-router-dom";
import { StyleWrapper } from "./Recod.style";

export function Record({ record }) {
  return (
    <StyleWrapper>
      <div className="record-info">
        <span className="record-date">{record.date}</span>
        <span className="record-item boldText">
          <Link to={`/detail/${record.id}`}>
            {record.item} - {record.description}
          </Link>
        </span>
      </div>
      <div className="record-amount boldText">{record.amount} 원</div>
    </StyleWrapper>
  );
}
