import Tabela from "../components/Tabela";
import Topbar from "../components/Topbar";

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
        <Tabela tableData={requerimentos} />
      </section>
    </div>
  );
}

export default Requerimento;
