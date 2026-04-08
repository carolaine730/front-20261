import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Requerimento from "./pages/Requerimento";

function App() {
  const pagina = 2;

  return (
    <>
      {pagina == 1 && <Dashboard />}
      {pagina == 2 && <Notas />}
      {pagina == 3 && <Faltas />}
      {pagina == 4 && <Boletos />}
      {pagina == 5 && <Requerimento />}
    </>
  );
}

export default App;
