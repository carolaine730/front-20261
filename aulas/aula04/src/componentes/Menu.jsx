import "./Menu.css";
import { Link, NavLink } from "react-router";

function Menu() {
    const usuarioId = 0; //exemplo como se a rota tivesse pegado da api esse id
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={`/perfil/${usuarioId}`}>Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Configuração</NavLink>
        </li>
        <li>
          <Link to="/login">Sair</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
