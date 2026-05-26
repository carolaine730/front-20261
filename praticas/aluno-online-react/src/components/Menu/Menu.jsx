import { NavLink } from "react-router";
import Logo from "../../assets/learn.svg";
import "./Menu.css";
import { useAuthContext } from "../../hooks/useAuthContext";

function Menu() {
  const { logout } = useAuthContext();
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
        <li onClick={logout}>Sair</li>
      </ul>
    </nav>
  );
}

export default Menu;
