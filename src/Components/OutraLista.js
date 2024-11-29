


function OutraLista ({itens}) {
    return (

        <>
        
            <h3> Lista de coisas Boas</h3> 

            {itens.length > 0 ? (
                //* "?" representa a condição if, e é necessário colocar o resultado dentro de ()
                itens.map((item , index) => <p key={index}>{item}</p>)
            ) : (
                //* ":" representa a condição else, e também necessário colocar o resultado dentro de ()
                <p>Não há itens na lista</p>
            )}
        


        </>

    )
}



export default OutraLista ;