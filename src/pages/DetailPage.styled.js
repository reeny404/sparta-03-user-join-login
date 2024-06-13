import styled from "styled-components";

export const DetailPageWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: left;

  > div {
    padding: 0.5rem 0;

    input {
      text-align: left;
      padding: 2px;
      box-sizing: border-box;
    }
    button {
      border: none;
      border-radius: 3px;
      margin: 0 3px;
      padding: 5px 10px;
      cursor: pointer;

      &:hover {
        background-color: #f0ad4e;
      }

      &:nth-child(1) {
        background-color: #3468dc;
        color: white;

        &:hover {
          background-color: #2b5fbb;
        }
      }

      &:nth-child(2) {
        background-color: #cd4747;
        color: white;

        &:hover {
          background-color: #b73737;
        }
      }
    }
  }
`;
