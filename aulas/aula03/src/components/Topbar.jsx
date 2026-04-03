import avatar from "../assets/avatar.svg"

function Topbar() {
  return (
    <div>
      <header>
        <h1>Olá, Aluno</h1>
        <img src={avatar} alt="Imagem do avatar" />
      </header>
    </div>
  );
}

export default Topbar;
