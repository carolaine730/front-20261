import Tabela from "../../components/Tabela/Tabela";
import Topbar from "../../components/Topbar/Topbar";
import {Link} from "react-router"

function Requerimento() {
  
  const requerimentos = {
    titulo: "Requerimentos",
    header: ['Tipo de Requerimento', 'Data de Solicitação', 'Situação'],
    data: [
      ['Revisão de Menção', '15/12/2025', 'Indeferido'],
      ['Dispensa de Disciplina', '12/06/2025', 'Indeferido'],
      ['Trancamento de Matrícula', '05/01/2024', 'Deferido'],
      ['Mudança de Turno', '10/10/2023', 'Deferido'],
      ['Renovação de Matrícula', '20/02/2023', 'Deferido'],
    ]
  }

  return (
    <div>
      <Topbar titulo="Meus Requerimentos" subtitulo="Faça solicitações online para a secretaria" />
      <section>
        <Link to="/requerimentos/novo">Novo Requerimento</Link>
        <Tabela tableData={requerimentos} title={requerimentos.titulo} />
      </section>
    </div>
  );
}

export default Requerimento;
