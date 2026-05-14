import { Outlet } from "react-router";
import Menu from "../components/Menu/Menu";

function Layout() {
  return (
    <>
      <Menu />
      <main className="app-main">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
