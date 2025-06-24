import React, { useState } from 'react';
import logo from '../assets/sapi-logo.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!usuario || !clave) {
      setError('Todos los campos son obligatorios');
      return;
    }

    // Simulación de autenticación (reemplazar con API)
    console.log('Autenticando usuario:', usuario, clave);

    // Limpieza
    setError('');
    setUsuario('');
    setClave('');
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <form className="login-form" onSubmit={manejarEnvio}>
          <h2>INICIAR SESIÓN</h2>

          {error && <p className="error-texto">{error}</p>}

          <label htmlFor="usuario">Usuario / Mawkak</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />

          <label htmlFor="clave">Llave / Paskana</label>
          <input
            type="password"
            id="clave"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            required
          />

          <button type="submit">Iniciar Sesión</button>

          <p className="login-texto">
            El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón...
          </p>

          <Link to="/registrarse" className="link-registrar">
            Registrar / Killkakamay
          </Link>
        </form>
      </div>

      <div className="login-right">
        <img src={logo} alt="Logo SAPI" className="logo-sapi" />
      </div>
    </div>
  );
};

export default Login;
