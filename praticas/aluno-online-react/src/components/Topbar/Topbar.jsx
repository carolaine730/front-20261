import './Topbar.css'
import Avatar from "../../assets/avatar.svg";


function Topbar({titulo, subtitulo}) {
  return (
    <header className="topbar">
      <div className="title-container">
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>{titulo}</h1>
        <img className="user-avatar" src={Avatar} alt="Imagem do avatar" />
      </div>
      <h2 className="subtitle-container" > {subtitulo}</h2>
    </header>
  );
}

export default Topbar;
