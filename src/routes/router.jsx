import { createBrowserRouter } from "react-router-dom";
import { DetailPage } from "../pages/DetailPage";
import { HomePage } from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/assign-react-js/",
    element: <HomePage />,
  },
  {
    path: "/assign-react-js/detail/:recordId",
    element: <DetailPage />,
  },
  {
    path: "/assign-react-js/signIn",
    element: <SignInPage />,
  },
  {
    path: "/assign-react-js/signUp",
    element: <SignUpPage />,
  },
]);
export default router;
