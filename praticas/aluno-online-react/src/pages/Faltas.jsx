import Tabela from "../components/Tabela";
import Topbar from "../components/Topbar";

function Faltas() {

  const table2026_1 = {
    titulo: "2026.1",
    header: ['Disciplina', 'Total de Faltas', '% de Presença'],
    data: [
      ['Bi e Data Warehousing', '0', '100%'],
      ['Construção de Frontend', '0', '100%'],
      ['Manutenção de Software e Devops', '0', '100%'],
    ]
  }

  const table2025_2 = {
    titulo: "2025.2",
    header: ['Disciplina', 'Total de Faltas', '% de Presença'],
    data: [
      ['Construção de Backend', '27', '87.5%'],
      ['Estrutura de Dados', '9', '85%'],
      ['Gerenciamento de Projetos', '10.5', '82.5%'],
    ]
  }
  
  return (
    <div>
      <Topbar titulo="Minhas Faltas" subtitulo="Histórico de Faltas por Semestre" />
      <section>
        <Tabela tableData={table2026_1} title={table2026_1.titulo} />
        <Tabela tableData={table2025_2} title={table2025_2.titulo} />
      </section>
    </div>
  );
}

export default Faltas;
