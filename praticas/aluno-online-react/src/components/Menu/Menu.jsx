import { NavLink } from "react-router";
import Logo from "../../assets/learn.svg";
import "./Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <header>
        <img src={Logo} alt="Logotipo" />
        <h1>Aluno Online</h1>
      </header>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/notas">Notas</NavLink>
        </li>
        <li>
          <NavLink to="/faltas">Faltas</NavLink>
        </li>
        <li>
          <NavLink to="/boletos">Boletos</NavLink>
        </li>
        <li>
          <NavLink to="/requerimentos">Requerimentos</NavLink>
        </li>
        <li>
          <NavLink to="/login">Sair</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
