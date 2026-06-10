const url = "http://localhost:3000/requerimentos";

async function criar(requerimento) {
  try {
    const resposta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(requerimento),
      headers: {
        "content-type": "application/json",
      },
    });

    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim:", error.message);
  }
}

async function listar() {
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim:", error.message);
  }
}

export { criar, listar };