import Card from "../../components/Card/Card";
import Topbar from "../../components/Topbar/Topbar";
import { useAuthContext } from "../../contexts/AuthContext";

function Dashboard() {
  const {usuario} = useAuthContext();

  return (
    <div>
      <Topbar titulo={`Olá, ${usuario.nome}`} subtitulo="Bem-Vindo ao portal do aluno" />
      <section>
        <Card titulo="Mural de Avisos" avisos={['Incrição para projeto de extensão', 'Eleição para representante de turma']}/>
        <Card titulo="Caledário Acadêmico" avisos={['23/02 - Inicio do período letivo 2026-1', '25/04 - Prazo final P1', '23/06 - Prazo final P2', '04/07 - Final do período letivo 2026-1']}/>
        <Card titulo="Minhas Disciplinas" avisos={['Construção de Frontend', 'Bi e Data Warehousing']}/>
      </section>
    </div>
  );
}

export default Dashboard;
