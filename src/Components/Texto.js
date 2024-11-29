import Sabedoria from "./sabedoria";
import Styles from "./Texto.module.css"

function Texto () {

    const nome = 'roberto';



    return (

        <div> 

            <h1 className={Styles.TextoContainer}>  Mudando o JSX </h1>
            <p  className={Styles.TextoContainerNome}>  Olá meu amigo , {nome} </p>
            <Sabedoria/>

        </div>

    );
}

export default Texto ;