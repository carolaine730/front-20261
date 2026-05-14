import Boletos from '../../pages/Boletos/Boletos';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Faltas from '../../pages/Faltas/Faltas';
import Notas from '../../pages/Notas/Notas';
import Requerimento from '../../pages/Requerimento/Requerimento';
import Logo from '../../assets/learn.svg';
import './Menu.css';

function Menu({setPagina}) {
  return (
    <nav className="menu">
      <header>
        <img src={Logo} alt="Logotipo" />
        <h1>Aluno Online</h1>
      </header>
      <ul>
        <li onClick={() => setPagina(<Dashboard />)}>Dashboard</li>
        <li onClick={() => setPagina(<Notas />)}>Notas</li>
        <li onClick={() => setPagina(<Faltas />)}>Faltas</li>
        <li onClick={() => setPagina(<Boletos />)}>Boletos</li>
        <li onClick={() => setPagina(<Requerimento />)}>Requerimento</li>
        <li onClick={() => setPagina(<Dashboard />)}>Sair</li>
      </ul>
    </nav>
  );
}

export default Menu;
