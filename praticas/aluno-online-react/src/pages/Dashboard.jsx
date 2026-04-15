import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Dashboard() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Bem-Vindo ao portal do aluno</h2>
        <section>
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
}

export default Dashboard;
