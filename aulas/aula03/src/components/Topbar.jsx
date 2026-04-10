import avatar from "../assets/avatar.svg"

function Topbar(props) {
  return (
    <div>
      <header>
        <h1>{props.titulo}</h1>
        <img src={avatar} alt="Imagem do avatar" />
      </header>
    </div>
  );
}

export default Topbar;
