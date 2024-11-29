import Item from "./Item"

function List () {
    return (
        // <div> 
        //     <h1>Minha lista</h1>
        //     <ul>
        //         <li>Item 1</li>
        //         <li>Item 2</li>
        //     </ul>
        // </div>

        // Ao invés de usarmos a div, simplesmente criamos um elemento sem denominação. A única mudança é que isso polui menos o código

        <>
            <h1>Minha lista</h1>
            <ul>
                <Item ano_lancamento = {2001} marca="apple"/>
                <Item ano_lancamento = {2003} marca="samsung"/>
                <Item ano_lancamento = {9999} marca="roberto"/>
                
                {/* // valor do item como default : */} <Item/>
            </ul>
        </>

    ) ;

}


export default List ; 