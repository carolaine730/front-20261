import Menu from "../components/Menu";
import Topbar from "../components/Topbar";


function Layout({ children }) {
  return (
    <>
     <Menu />
      <main className="app-main">
        {children}
      </main>
    </>
  );
}

export default Layout;