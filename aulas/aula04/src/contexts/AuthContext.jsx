import { createContext, useState } from "react";

//cria o contexto
const AuthContext = createContext();

//cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsusario] = useState({});

  const login = (dados) => {
    //chamar a API passando dados
    setUsusario({
      id: 0,
      nome: "Carol",
      email: "carolaine@iesb.edu.br",
    });
    setLogado(true);
  };

  const logout = () => {
    setUsusario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {/*o values é o estado compartilhado */}

      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
