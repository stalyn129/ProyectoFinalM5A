import React, { useState } from 'react';
import '../components/Registrarse.css';
import logo from '../assets/sapi-logo.png';

const Registrarse = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    ciudad: '',
    telefono: '',
    contrasena: '',
    confirmarContrasena: '',
    fechaNacimiento: '',
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (formulario.contrasena !== formulario.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Datos enviados:', formulario);
    // Aquí conectas con el backend o API
  };

  return (
    <div className="registro-page">
      <div className="registro-header">
        <h2>Registrarse / Killkakamay</h2>
        <img src={logo} alt="SAPI Logo" className="logo-sapi" />
      </div>
      <form className="registro-form" onSubmit={manejarEnvio}>
        <div className="registro-column">
          <label>Nombre:</label>
          <input name="nombre" onChange={manejarCambio} value={formulario.nombre} required />

          <label>Apellido:</label>
          <input name="apellido" onChange={manejarCambio} value={formulario.apellido} required />

          <label>Correo:</label>
          <input type="email" name="correo" onChange={manejarCambio} value={formulario.correo} required />

          <label>Fecha de nacimiento:</label>
          <input type="date" name="fechaNacimiento" onChange={manejarCambio} value={formulario.fechaNacimiento} required />
        </div>

        <div className="registro-column">
          <label>Ciudad:</label>
          <input name="ciudad" onChange={manejarCambio} value={formulario.ciudad} required />

          <label>Teléfono:</label>
          <input name="telefono" onChange={manejarCambio} value={formulario.telefono} required />

          <label>Contraseña:</label>
          <input type="password" name="contrasena" onChange={manejarCambio} value={formulario.contrasena} required />

          <label>Confirmar Contraseña:</label>
          <input type="password" name="confirmarContrasena" onChange={manejarCambio} value={formulario.confirmarContrasena} required />
        </div>

        <button type="submit" className="boton-registrar">Registrar</button>
      </form>
    </div>
  );
};

export default Registrarse;
