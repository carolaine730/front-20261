import logo from '../assets/learn.svg';
import Menu from './Menu.jsx'

function Sidebar() {
  return (
    <aside>
      <header>
        <img src={logo} alt="Logotipo" />
        <h1>Aluno Online</h1>
      </header>
      <Menu />
    </aside>
  );
}

export default Sidebar;
