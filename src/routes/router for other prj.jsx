import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import { DetailPage } from "../pages/DetailPage";
import { HomePage } from "../pages/HomePage";
import MyProfilePage from "../pages/MyProfilePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { initUserLoader } from "./loaders/initUser.loader";

// 타 프로젝트에서 import 해서 쓸 때 바꿔서 쓸 사본
const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    loader: initUserLoader,
    children: [
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
      {
        path: "/assign-react-js/profile",
        element: <MyProfilePage />,
      },
    ],
  },
]);
export default router;
