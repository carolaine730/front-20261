import Tabela from "../../components/Tabela/Tabela";
import Topbar from "../../components/Topbar/Topbar";

function Notas() {
  const table = {
    titulo: "2026-1",
    header: ['Disciplina', 'A1', 'A2', 'A3', 'Menção'],
    data: [
      ['Bi', '10', '10', '0.5', 'MS'],
      ['Frontend', '10', '10', '10', 'SS'],
      ['Devops', '0.5', '10', '0.5', 'MM'],
    ]
  }

  return (
    <div>
      <Topbar titulo="Minhas Notas" subtitulo="Histórico de Notas por Semestre" />
      <section>
        <Tabela tableData={table} title={table.titulo} />
      </section>
    </div>
  );
}

export default Notas;
