import { useEffect, useState } from "react";
import Tabela from "../../components/Tabela/Tabela";
import Topbar from "../../components/Topbar/Topbar";
import {Link} from "react-router"
import { listar } from "../../services/requerimentoService";

function Requerimento() {
  
  const [requerimentos, setDados] = useState({ header: ['Tipo de Requerimento', 'Data de Solicitação', 'Situação'], data:[]})
   useEffect(() => {
    //dispatch
    const disparar = async () => {
      const resposta = await listar();
      setDados({ header: ['Tipo de Requerimento', 'Data de Solicitação', 'Situação', 'descricao', 'id'], data: resposta});
    };
    disparar();

  }, []);


  return (
    <div>
      <Topbar titulo="Meus Requerimentos" subtitulo="Faça solicitações online para a secretaria" />
      <section>
        <Link to="/requerimentos/novo">Novo Requerimento</Link>
        <Tabela tableData={requerimentos} title={"Requerimentos"} />
      </section>
    </div>
  );
}

export default Requerimento;
