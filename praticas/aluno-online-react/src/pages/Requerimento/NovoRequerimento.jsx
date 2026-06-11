import { useForm } from "react-hook-form";
import Tabela from "../../components/Tabela/Tabela";
import Topbar from "../../components/Topbar/Topbar";
import "./NovoRequerimento.css";
import { criar } from "../../services/requerimentoService";
import { useNavigate } from "react-router";

function NovoRequerimento() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await criar({...data, data: new Date(), situacao: "Em Analise"});
    reset();
    navigate("/requerimentos");
  };

  const hoje = new Date().toLocaleDateString("en-CA");

  return (
    <div>
      <Topbar titulo="Meus Requerimentos" subtitulo="Novo Requerimento" />

      <form className="form-requerimento" onSubmit={handleSubmit(onSubmit)}>
        <div className="campo">
          <label>Tipo de Requerimento</label>

          <select
            {...register("tipo", {
              required: "Tipo é obrigatório",
            })}
          >
            <option value="">Selecione um tipo...</option>
            <option value="Revisão de Menção">Revisão de Menção</option>
            <option value="Dispensa de Disciplina">
              Dispensa de Disciplina
            </option>
            <option value="Trancamento de Matrícula">
              Trancamento de Matrícula
            </option>
          </select>

          {errors.tipo && <p className="erro">{errors.tipo.message}</p>}
        </div>

        <div className="campo">
          <label>Descrição</label>

          <textarea
            {...register("descricao", {
              required: "Descrição é obrigatória",
            })}
          />

          {errors.descricao && (
            <p className="erro">{errors.descricao.message}</p>
          )}
        </div>

        <div className="campo">
          <label>Data do Requerimento</label>

          <input type="date" value={hoje} readOnly />
        </div>

        <div className="botoes">
          <button type="button" onClick={() => reset()}>
            Cancelar
          </button>

          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default NovoRequerimento;
