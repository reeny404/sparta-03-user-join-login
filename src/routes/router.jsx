import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import { DetailPage } from "../pages/DetailPage";
import { HomePage } from "../pages/HomePage";
import MyProfilePage from "../pages/MyProfilePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import { initUserLoader } from "./loaders/initUser.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    loader: initUserLoader,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/detail/:recordId",
        element: <DetailPage />,
      },
      {
        path: "/signIn",
        element: <SignInPage />,
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
      },
      {
        path: "/profile",
        element: <MyProfilePage />,
      },
    ],
  },
]);
export default router;
