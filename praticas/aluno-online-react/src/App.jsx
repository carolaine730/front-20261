import { useState } from "react";
import Boletos from "./pages/Boletos/Boletos";
import Dashboard from "./pages/Dashboard/Dashboard";
import Faltas from "./pages/Faltas/Faltas";
import Notas from "./pages/Notas/Notas";
import Requerimento from "./pages/Requerimento/Requerimento";
import Logo from "./assets/learn.svg"
import Avatar from "./assets/avatar.svg"
import Menu from "./components/Menu/Menu";
import Layout from "./pages/Layout";
import Login from "./pages/Login/Login";
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [pagina, setPagina] = useState(<Dashboard />);

  const handleLogin = (credentials) => {
    setUser(credentials);
    setIsAuthenticated(true);
    setPagina(<Dashboard />);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setPagina(null);
  };

  if (!isAuthenticated && !user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <Layout setPagina={setPagina} onLogout={handleLogout}>
        <main className="app-main">
          {pagina}
        </main>
      </Layout>
    </div>
  );
}

export default App;
