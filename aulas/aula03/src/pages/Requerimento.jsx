
import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Requerimento() {
  return (
    <Layout
      titulo="Meus Requerimentos"
      subtitulo="Faça a Solicitação O
    nline Para a Secretaria"
    >
      <Tabela />
      <Tabela />
      <Tabela />
    </Layout>
  );
}

export default Requerimento;
