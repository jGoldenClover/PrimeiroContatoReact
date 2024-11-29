import { useState } from 'react'

function Condicional () {
    

    const [email , setEmail] = useState() ;
    const [userEmail , setUserEmail] = useState() ;

    function enviarEmail (e) {
        e.preventDefault() ;
        setUserEmail(email)
    }
    function limparEmail () {
        setUserEmail('')
    }
    
    return (

        <>

            <h2>Cadastre seu e-mail</h2>
            <form>
                <input type="email" placeholder='Digite seu email:' onChange={(e) => setEmail(e.target.value)}/>

                <button type='submit' onClick={enviarEmail}>Enviar Email</button>

                {userEmail && (

                    <div>
                        <p>Email de usuario criado {userEmail}</p>
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>

                )}


            </form>

        </>

    )
}

export default Condicional ;