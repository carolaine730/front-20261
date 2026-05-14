import Tabela from "../../components/Tabela/Tabela";
import Topbar from "../../components/Topbar/Topbar";

function Boletos() {
  
  const boletos = {
    titulo: "Boletos",
    header: ['Vencimento', 'Valor R$', 'Situação'],
    data: [
      ['19/01/2026', '500,00', 'Pago'],
      ['19/02/2026', '500,00', 'Em atraso'],
      ['19/03/2026', '500,00', 'A Pagar'],
      ['19/04/2026', '500,00', 'A Pagar'],
      ['19/05/2026', '500,00', 'A Pagar'],
      ['19/06/2026', '500,00', 'A Pagar'],
      ['19/07/2026', '500,00', 'A Pagar'],
      ['19/08/2026', '500,00', 'A Pagar'],
      ['19/09/2026', '500,00', 'A Pagar'],
      ['19/10/2026', '500,00', 'A Pagar'],
      ['19/11/2026', '500,00', 'A Pagar'],
      ['19/12/2026', '500,00', 'A Pagar'],
    ]
  }

  return (
    <div>
      <Topbar titulo="Meus Boletos" subtitulo="Histórico de Pagamentos" />
      <section>
        <Tabela tableData={boletos} title={boletos.titulo} />
      </section>
    </div>
  );
}

export default Boletos;
