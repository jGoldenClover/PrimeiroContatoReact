function Pessoa ({nome , idade , foto , funcao , telefone}) {
    return (

        <div>
            <img src={foto} alt='Idade Pessoa'></img>
            <h2>Nome :{nome}</h2>
            <p>Idade :{idade}</p>
            <p>Profição:{funcao}</p>
            <p>Telefone :{telefone}</p>
        </div>

    );

}


export default Pessoa