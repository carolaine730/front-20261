import Boletos from "./pages/Boletos/Boletos";
import Dashboard from "./pages/Dashboard/Dashboard";
import Faltas from "./pages/Faltas/Faltas";
import Notas from "./pages/Notas/Notas";
import Requerimento from "./pages/Requerimento/Requerimento";
import Login from "./pages/Login/Login";
import Layout from "./pages/Layout";

import "./App.css";

import { Route, Routes, Navigate } from "react-router";
import { useAuthContext } from "./hooks/useAuthContext";
import NovoRequerimento from "./pages/Requerimento/NovoRequerimento";

function App() {
  const { logado } = useAuthContext();

  // usuário NÃO logado
  if (!logado) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

  // usuário logado
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimento />} />
        <Route path="requerimentos/novo" element={<NovoRequerimento/>} />
      </Route>

      {/* qualquer rota inválida volta pro dashboard */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;