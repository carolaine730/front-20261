import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";
import Topbar from "../components/Topbar";

function Boletos() {
   return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Meus Boletos</h2>
        <section>
          <Tabela />
          <Tabela />
        </section>
      </main>
    </>
  );
}

export default Boletos;
