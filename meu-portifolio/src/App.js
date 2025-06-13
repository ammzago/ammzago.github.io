// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#sobre">Sobre</a>
        <a href="#formacao">Formação Acadêmica</a>
        <a href="#profissional">Experiência Profissional</a>
        <a href="#cursos">Cursos</a>
      </nav>

      <header className="header" id="sobre">
        <img
          src="/minha-foto.jpg"
          alt="Sua Foto"
          className="foto"
        />
        <h1>Seu Nome</h1>
        <p>Desenvolvedor Front-End | Apaixonado por tecnologia</p>
      </header>

      <section id="formacao">
        <h2>🎓 Formação Acadêmica</h2>
        <p>Curso de Sistemas de Informação - Universidade X (2020 - 2024)</p>
      </section>

      <section id="profissional">
        <h2>💼 Experiência Profissional</h2>
        <p>Desenvolvedor na Empresa Y - 2023 até o momento</p>
      </section>

      <section id="cursos">
        <h2>📚 Cursos</h2>
        <ul>
          <li>React.js Avançado - Plataforma Z</li>
          <li>Git & GitHub - Curso Rápido</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
