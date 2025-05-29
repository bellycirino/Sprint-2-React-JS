function Busca ({ busca, setBusca}) {
    return (
        <div className="busca"> 
        <input
        type="text"
        placeholder="Buscar livros..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        />
    </div>
    );
}

export default Busca; 