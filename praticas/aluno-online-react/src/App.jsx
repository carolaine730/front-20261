import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Requerimento from "./pages/Requerimento";
import Logo from "./assets/learn.svg"
import Avatar from "./assets/avatar.svg"
import Menu from "./components/Menu";
import './App.css';
import Layout from "./pages/Layout";

function App() {
  const pagina = <Dashboard />
  return (
    <div className="app-container">
      <Layout>
        <main className="app-main">
          {pagina}
        </main>
      </Layout>
    </div>
  );
}

export default App;
