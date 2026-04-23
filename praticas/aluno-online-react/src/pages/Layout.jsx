import Menu from "../components/Menu/Menu";
import Topbar from "../components/Topbar/Topbar";


function Layout({ children, setPagina }) {
  return (
    <>
     <Menu setPagina={setPagina} />
      <main className="app-main">
        {children}
      </main>
    </>
  );
}

export default Layout;