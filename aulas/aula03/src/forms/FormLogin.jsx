import { useState } from "react";
import InputMatricula from "../components/InputMatricula";
import InputSenha from "../components/InputSenha";
import BotaoSubmit from "../components/BotaoSubmit";

function FormLogin() {
  const [matricula, setMatricula] = useState();
  const [senha, setSenha] = useState();
  const [matriculaErro, setMatriculaErro] = useState();
  const [senhaErro, setSenhaErro] = useState();

  const trataSubmit = (e) => {
    e.preventDefault();

    if (!matricula) {
      setMatriculaErro("Matricula e obrigatoria");
    }

    if (!senha) {
      setSenhaErro("Senha e Obrigatoria");
    }
  };

  const mudaMatricula = (e) => {
    setMatricula(e.target.value);
    setMatriculaErro("");
  };

  const mudaSenha = (e) => {
    setSenha(e.target.value);
    setSenhaErro("");
  };

  return (
    <form onSubmit={trataSubmit}>
      
      <InputMatricula
        valor={matricula}
        erro={matriculaErro}
        mudaValor={mudaMatricula}
      />

      <InputSenha erro={senhaErro} mudaValor={mudaSenha} />
      <BotaoSubmit>Entrar</BotaoSubmit>
    </form>
  );
}

export default FormLogin;
