import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './view/Login';
import './styles/global.css';
import Registrarse from './view/Registrarse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrarse" element={<Registrarse />} />
      </Routes>
    </Router>
  );
}

export default App;
