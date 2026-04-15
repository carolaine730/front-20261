import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";
import Topbar from "../components/Topbar";

function Notas() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Minhas Notas</h2>
        <section>
          <Tabela />
          <Tabela />
        </section>
      </main>
    </>
  );
}

export default Notas;
