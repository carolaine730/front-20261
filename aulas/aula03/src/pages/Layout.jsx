import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Layout(props) {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar titulo={props.titulo}/>
        <h2>{props.subtitulo}</h2>
        <section>{props.children}</section>
        <Topbar />
      </main>
    </>
  );
}

export default Layout;