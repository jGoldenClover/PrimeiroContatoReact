function Saudacao ( {nome} ) {

    function gerarSaldacao (algumNome) {
        return `Olá , ${algumNome} , seja bem vindo!`
    }

    return(
        <>{nome &&  ( <p>{gerarSaldacao(nome)}</p> )}</>
    )
}



export default Saudacao;