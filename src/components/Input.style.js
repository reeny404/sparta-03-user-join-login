import styled from "styled-components";

const GREY_COLOR = "#C0C0C0";

export const StyleInputWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

  > label {
    font-size: 0.6rem;
    position: relative;
    top: -3px;
    color: ${GREY_COLOR};
    /* left: 1.5rem; */
  }
  > Input {
    border: none;
    border-bottom: 1px solid ${GREY_COLOR};
    outline: none;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    background-color: inherit;
  }
`;
