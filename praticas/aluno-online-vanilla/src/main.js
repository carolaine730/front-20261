import "./style.css";

const botao = document.querySelector("button");

botao.addEventListener("click", (e) => {
  e.preventDefault ();
  const matriculaInput = document.querySelector("#Matricula");
  const matriculaErro = document.querySelector("#MatriculaErro");
  const senhaInput = document.querySelector("#Senha");
  const senhaErro = document.querySelector("#SenhaErro");

  matriculaErro.textContent = '';
  senhaErro.textContent = '';

  if (matriculaInput.value == "") {
    matriculaErro.textContent = "Matrícula é obrigatória";
    return;
  }

  if (parseInt(matriculaInput.value) <= 0) {
    matriculaErro.textContent = "Matrícula deve ser um número positivo";
    return;
  }

  if (senhaInput.value == "") {
    senhaErro.textContent = "Senha é obrigatória";
    return;
  }

  if (senhaInput.value.length < 8) {
    senhaErro.textContent = "A Senha deve conter pelo menos 8 caracteres";
    return;
  }
});