import Boletos from '../pages/Boletos';
import Dashboard from '../pages/Dashboard';
import Faltas from '../pages/Faltas';
import Notas from '../pages/Notas';
import Requerimento from '../pages/Requerimento';
import Logo from '../assets/learn.svg';
import './Menu.css';

function Menu() {
  return (
    <nav className="menu">
      <header>
        <img src={Logo} alt="Logotipo" />
        <h1>Aluno Online</h1>
      </header>
      <ul>
        <li>Dashboard</li>
        <li>Notas</li>
        <li>Faltas</li>
        <li>Boletos</li>
        <li>Requerimento</li>
        <li>Sair</li>
      </ul>
    </nav>
  );
}

export default Menu;
