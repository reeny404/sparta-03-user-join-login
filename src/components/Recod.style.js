import styled from "styled-components";

export const StyleWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 0.5rem;

  border-radius: 3px;
  background-color: #fafafa;
  box-shadow: 2px 2px 2px #e3e3e3;

  > .record-info {
    display: grid;
    grid-template-rows: 1fr;
    text-align: left;

    > .record-date {
      padding-bottom: 3px;
      font-size: 0.8rem;
    }

    > .record-item {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      a {
        text-decoration: none;
        color: inherit;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  > .record-amount {
    text-align: right;
    margin: auto 0;
    color: #305552;
  }

  .boldText {
    color: #305552;
    font-weight: bold;
  }
`;
