import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";
import Topbar from "../components/Topbar";

function Faltas() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Minhas Faltas</h2>
        <section>
          <Tabela />
          <Tabela />
        </section>
      </main>
    </>
  );
}

export default Faltas;
