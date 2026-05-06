import { useParams } from "react-router";

//post/1commend/10
function Perfil() {
  const { id } = useParams();

  //buscar os dados do usuário
  return <h1>Perfil Do Usuário {id} </h1>;
}
export default Perfil;
