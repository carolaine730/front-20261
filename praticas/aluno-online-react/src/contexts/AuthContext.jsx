import { createContext, useState, useEffect } from "react";
import { login as loginService } from "../services/authService";

// cria o contexto
const AuthContext = createContext();

// cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsusario] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const usuarioSalvo = localStorage.getItem("usuario");

    if (token && usuarioSalvo) {
      setLogado(true);
      setUsusario(JSON.parse(usuarioSalvo));
    }
  }, []);

  const login = async (email, senha) => {
    const resposta = await loginService(email, senha);

    localStorage.setItem("usuario", JSON.stringify(resposta.usuario));

    localStorage.setItem("token", resposta.token);

    setUsusario(resposta.usuario);
    setLogado(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    setLogado(false);
    setUsusario({});
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
