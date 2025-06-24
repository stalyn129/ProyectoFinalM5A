import React, { useState } from 'react';
import logo from '../assets/sapi-logo.jpg';

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

  const [error, setError] = useState('');

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const {
      nombre,
      apellido,
      correo,
      ciudad,
      telefono,
      contrasena,
      confirmarContrasena,
      fechaNacimiento,
    } = formulario;

    // Validación básica
    if (!nombre || !apellido || !correo || !ciudad || !telefono || !contrasena || !fechaNacimiento) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Simulación de envío al backend
    console.log('Registrando:', formulario);

    // Resetear
    setError('');
    setFormulario({
      nombre: '',
      apellido: '',
      correo: '',
      ciudad: '',
      telefono: '',
      contrasena: '',
      confirmarContrasena: '',
      fechaNacimiento: '',
    });
  };

  return (
    <div className="registro-page">
      <div className="registro-header">
        <h2>Registrarse / Killkakamay</h2>
        <img src={logo} alt="SAPI Logo" className="logo-sapi" />
      </div>

      {error && <p className="error-texto">{error}</p>}

      <form className="registro-form" onSubmit={manejarEnvio}>
        <div className="registro-column">
          <label>Nombre:</label>
          <input name="nombre" value={formulario.nombre} onChange={manejarCambio} required />

          <label>Apellido:</label>
          <input name="apellido" value={formulario.apellido} onChange={manejarCambio} required />

          <label>Correo:</label>
          <input type="email" name="correo" value={formulario.correo} onChange={manejarCambio} required />

          <label>Fecha de nacimiento:</label>
          <input type="date" name="fechaNacimiento" value={formulario.fechaNacimiento} onChange={manejarCambio} required />
        </div>

        <div className="registro-column">
          <label>Ciudad:</label>
          <input name="ciudad" value={formulario.ciudad} onChange={manejarCambio} required />

          <label>Teléfono:</label>
          <input name="telefono" value={formulario.telefono} onChange={manejarCambio} required />

          <label>Contraseña:</label>
          <input type="password" name="contrasena" value={formulario.contrasena} onChange={manejarCambio} required />

          <label>Confirmar Contraseña:</label>
          <input type="password" name="confirmarContrasena" value={formulario.confirmarContrasena} onChange={manejarCambio} required />
        </div>

        <button type="submit" className="boton-registrar">Registrar</button>
      </form>
    </div>
  );
};

export default Registrarse;
