import React from "react";
import './LivroCard.css';

function LivroCard({ titulo, autor, idioma, downloads}) {
    return(
        <div className="livro-card">

      <p><strong>Autor:</strong> {autor ? autor : 'Desconhecido'}</p>
      <p><strong>Idioma:</strong> {idioma}</p>
      <p><strong>Downloads:</strong> {downloads}</p>

        </div>
    )
}

export default LivroCard;