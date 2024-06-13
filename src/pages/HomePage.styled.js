import { styled } from "styled-components";

export const HomePageWrppaer = styled.div`
  > section {
    margin-bottom: 1rem;
    max-width: 800px;
    margin: 1rem auto;
  }
`;
export const SectionCashRecords = styled.section`
  background-color: #fff;
  border-radius: 10px;
  padding: 0.5rem 0;
`;

export const StyleButtonSelectingMonth = styled.button`
  flex: 1;
  border: none;
  border-radius: 10px;
  background-color: #d2d2d2;
  padding: 10px;
  margin: 5px;
  box-sizing: border-box;
  cursor: pointer;

  ${(props) =>
    props.selected ? "background-color: #8aa6a3; color: white;" : ""}

  /* &.selected, */
  :hover {
    background-color: #8aa6a3;
    color: white;
  }
`;

export const SectionSelectingMonth = styled.section`
  > div {
    width: 100%;
    margin: auto;
    background-color: #fff;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const SectionCreateCashRecord = styled.section`
  width: 100%;
  margin: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 2fr) 1fr;

  button {
    border-radius: 5px;
    padding: 0.4rem;
    border: none;
    outline: none;
    cursor: pointer;
  }

  /* > div {
      grid-template-rows : repeat(5, 1fr);
  } */
`;
