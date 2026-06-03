const url = "http://localhost:3000/produtos";

async function criar(produto) { //criar usa-se metodo post
  try {
    const resposta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(produto),
      headers: {
        "content-type": "application/json",
      },
    });
    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim: ", error.message);
  }
}

async function obter(produto) {
    try { //como obter é um GET não precisamos detalhar ele
    const resposta = await fetch(`${url}/${produto.id}`); //vai me trazer a url/o id do produto
    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim: ", error.message);
  }
}

async function listar() {
    try {
    const resposta = await fetch(url); //o listar como quero todos os produtos, não colocamos um parametro e nem detalhamos ele, todavia, é um GET
    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim: ", error.message);
  }
}

async function modificar(produto) {
    try {
    const resposta = await fetch(`${url}/${produto.id}`, {
      method: "PUT", //para modificar usamos o PUT e na sua url ele precisa saber do id 
      body: JSON.stringify(produto),
      headers: {
        "content-type": "application/json",
      },
    });
    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim: ", error.message);
  }
}

async function remover(produto) {
      try { //como REMOVER é um DELETE precisa passar o metodo e especificar na url o id
    const resposta = await fetch(`${url}/${produto.id}`, {
        method: "DELETE"
    }); 
    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.log("Deu ruim: ", error.message);
  }
}

export {criar, obter, listar, modificar, remover}