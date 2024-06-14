import styled from "styled-components";
import { Record } from "./Record";

export function RecordList({ list }) {
  return (
    <StyleList>
      {list.map((record, i) => (
        <li key={i}>
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
