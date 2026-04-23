import './TopBar.css'
import Avatar from "../assets/avatar.svg"

function Topbar({titulo, subtitulo}) {
  return (
    // <header style={{ alignItems: "center", justifyContent: 'space-between', width: '100%', gap: "4px", marginBottom: '32px' }}>
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
