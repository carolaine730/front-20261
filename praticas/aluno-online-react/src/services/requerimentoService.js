const url = "http://localhost:3000/requerimentos";

async function criar(requerimento) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw {
      status: 401,
      message: "Usuário não autenticado",
    };
  }

  try {
    const resposta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(requerimento),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim:", error.message);
  }
}

async function listar() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw {
      status: 401,
      message: "Usuário não autenticado",
    };
  }

  try {
    const resposta = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim:", error.message);
  }
}

export { criar, listar };