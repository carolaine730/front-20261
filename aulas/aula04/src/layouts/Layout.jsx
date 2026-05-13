import { Navigate, Outlet } from "react-router";
import Menu from "../componentes/Menu";
import { useAuthContext } from "../contexts/AuthContext";

function Layout() {
  const { logado } = useAuthContext();

  return (
    <>
      {logado ? (
        <>
          <aside>
            <Menu />
          </aside>
          <main>
            <Outlet />
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Layout;
