import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";
import Topbar from "../components/Topbar";

function Requerimento() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Meus Requerimentos</h2>
        <section>
          <Tabela />
          <Tabela />
        </section>
      </main>
    </>
  );
}

export default Requerimento;
