import axios from "axios";

const API_URL = "http://localhost:3000";

const login = async (email, senha) => {
  const response = await axios.get(`${API_URL}/usuarios?email=${email}`);

  const usuario = response.data[0];

  if (!usuario || usuario.senha !== senha) {
    throw new Error("Email ou senha inválidos");
  }

  const token = btoa(`${usuario.email}-${Date.now()}`);

  return {
    usuario,
    token,
  };
};

export { login };
