import Boletos from "./pages/Boletos/Boletos";
import Dashboard from "./pages/Dashboard/Dashboard";
import Faltas from "./pages/Faltas/Faltas";
import Notas from "./pages/Notas/Notas";
import Requerimento from "./pages/Requerimento/Requerimento";
import Logo from "./assets/learn.svg";
import Avatar from "./assets/avatar.svg";
import Menu from "./components/Menu/Menu";
import Layout from "./pages/Layout";
import Login from "./pages/Login/Login";
import "./App.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimento />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
