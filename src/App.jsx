// Importando os hooks do React (useState) e os componetes
import { useState } from 'react';
import Busca from './components/busca/Busca';
import './App.css';


function App() {
  //Estado para armazenar o texto digitado na busca
  const [busca, setBusca] = useState("");


  //lista de livro
  const livros = [
    "Uma Vida com Propósitos",
    "A Cabana",
    "Feridos em Nomes de Deus",
    "Casamento Blindado",
    "O Poder da Esposa que Ora",
    "Mulher Controlada pelo Espirito",
  ];
   //Filtra os livros com base no texto digitado na busca
    const livrosFiltrados = livros.filter((livro) => 
    livro.toLowerCase().includes(busca.toLowerCase())
  );
 
  return (
    <div className="App">
      <header className="header">
        <h1>📚 Biblioteca Técnica</h1>
      </header>
      <main>
        <Busca busca={busca} setBusca={setBusca} />
        <div className="livros">
          <p>🔍 Resultados para: <strong>{busca}</strong></p>
          {livrosFiltrados.length > 0 ? (
            <ul>
              {livrosFiltrados.map((livro, index) => (
                <li key={index}>{livro}</li>
              ))}
            </ul>
          ) : (
            <p>Nenhum livro encontrado 😢</p>
          )}
        </div>
      </main>
    </div>
  );
}
export default App;