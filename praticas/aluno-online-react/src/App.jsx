import Boletos from "./pages/Boletos/Boletos";
import Dashboard from "./pages/Dashboard/Dashboard";
import Faltas from "./pages/Faltas/Faltas";
import Notas from "./pages/Notas/Notas";
import Requerimento from "./pages/Requerimento/Requerimento";
import Logo from "./assets/learn.svg"
import Avatar from "./assets/avatar.svg"
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import './App.css';
import Layout from "./pages/Layout";

function App() {
  const [pagina, setPagina] = useState(<Dashboard />)
  return (
    <div className="app-container">
      <Layout setPagina={setPagina}>
        <main className="app-main">
          {pagina}
        </main>
      </Layout>
    </div>
  );
}

export default App;
