import Menu from "../components/Menu/Menu";
import Topbar from "../components/Topbar/Topbar";


function Layout({ children, setPagina, onLogout }) {
  return (
    <>
     <Menu setPagina={setPagina} onLogout={onLogout} />
      <main className="app-main">
        {children}
      </main>
    </>
  );
}

export default Layout;