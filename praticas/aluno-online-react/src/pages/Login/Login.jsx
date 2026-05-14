import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Login.css';
import Logo from '../../assets/learn.svg';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({ email: '', senha: '' });

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Validar email em tempo real
    if (value.trim() === '') {
      setErrors(prev => ({ ...prev, email: 'O campo de email é obrigatório.' }));
    } else if (!value.includes('@')) {
      setErrors(prev => ({ ...prev, email: 'Email inválido.' }));
    } else {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleChangeSenha = (e) => {
    const value = e.target.value;
    setSenha(value);
    
    // Validar senha em tempo real
    if (value.trim() === '') {
      setErrors(prev => ({ ...prev, senha: 'O campo de senha é obrigatório.' }));
    } else if (value.length < 3) {
      setErrors(prev => ({ ...prev, senha: 'A senha deve ter no mínimo 3 caracteres.' }));
    } else {
      setErrors(prev => ({ ...prev, senha: '' }));
    }
  };

  const handleSubmit = (e) => {
    // Impedir comportamento padrão do formulário
    e.preventDefault();
    
    let newErrors = { email: '', senha: '' };
    let isValid = true;

    // Validação final
    if (email.trim() === '') {
      newErrors.email = 'O campo de email é obrigatório.';
      isValid = false;
    } else if (!email.includes('@')) {
      newErrors.email = 'Email inválido.';
      isValid = false;
    }

    if (senha.trim() === '') {
      newErrors.senha = 'O campo de senha é obrigatório.';
      isValid = false;
    } else if (senha.length < 3) {
      newErrors.senha = 'A senha deve ter no mínimo 3 caracteres.';
      isValid = false;
    }

    setErrors(newErrors);

    // Se válido, fazer login
    if (isValid) {
      navigate("/")
      setEmail('');
      setSenha('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src={Logo} alt="Logotipo" className="login-logo" />
          <h1>Aluno Online</h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              placeholder="Digite seu email"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={handleChangeSenha}
              placeholder="Digite sua senha"
              className={errors.senha ? 'input-error' : ''}
            />
            {errors.senha && <p className="error-message">{errors.senha}</p>}
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <footer className="login-footer">
          <p>&copy; 2026. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default Login;
