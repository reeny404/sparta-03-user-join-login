import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import store from "./redux/store";
import "./reset.css";
import router from "./routes/router";

const BodyWeek2 = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #8aa6a3;
  padding: 1rem;
  box-sizing: border-box;
`;

export default function Week2() {
  return (
    <BodyWeek2 id="Week2">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </BodyWeek2>
  );
}
