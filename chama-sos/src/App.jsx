import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <nav>
          <span className="home-link">HOME</span>
        </nav>
      </header>
      <main className="main-content">
        <div className="card">
          <img 
            src="/caminho/para/sua/imagem.png" 
            alt="Logo Chama SOS PE" 
            className="card-logo" 
          />
          <h1 className="card-title">CHAMA SOS PE</h1>
          <p className="card-subtitle">RÁPIDO E SEGURO</p>
        </div>
      </main>
    </div>
  );
}

export default App;