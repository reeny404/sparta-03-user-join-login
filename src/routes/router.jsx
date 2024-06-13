import { createBrowserRouter } from "react-router-dom";
import { DetailPage } from "../pages/DetailPage";
import { HomePage } from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/assign-react-js/",
    element: <HomePage />,
  },
  {
    path: "/assign-react-js/detail/:recordId",
    element: <DetailPage />,
  },
]);
export default router;
