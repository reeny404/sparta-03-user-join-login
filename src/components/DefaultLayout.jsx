import { Outlet } from "react-router";
import Header from "./Header";

function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
