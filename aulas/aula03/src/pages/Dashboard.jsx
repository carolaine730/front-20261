import Card from "../components/Card";
import Layout from "./Layout";

function Dashboard() {
const avisos = [
  "Eleição para representante",
  "Participe do IESB-SE"
];

const datas = [
  "23/04 - AvaliaÇão P1",
  "04/05 - Transferência de Curso",
  "07/06 - Renovação de Matrícula"
]

const diciplinas = [
  "Construção de FrontEnd",
  "BI e Data Warehousing"
]
  return (
    <Layout titulo="Olá, Aluno" subtitulo="Bem-Vindo ao portal do aluno">
          <Card titulo="Mura de Avisos" items={avisos}/>
          <Card titulo="Calendário Acadêmico"  items={datas} />
          <Card titulo="Minhas Diciplinas"  items={diciplinas}/>
      </Layout>

  );
}

export default Dashboard;
