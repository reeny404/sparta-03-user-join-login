import { useSelector } from "react-redux";
import styled from "styled-components";
import { Record } from "./Record";

export function RecordList({ month }) {
  const records = useSelector((state) => state.spendings);
  const list = month
    ? records.filter((record) => new Date(record.date).getMonth() + 1 === month)
    : records;

  return (
    <StyleList>
      {list.map((record) => (
        <li key={record.id}>
          <Record record={record} />
        </li>
      ))}
    </StyleList>
  );
}

const StyleList = styled.ol`
  margin: 0;
  padding: 0;

  > li {
    list-style: none;
    padding: 0.3rem 0.8rem;
  }
`;
