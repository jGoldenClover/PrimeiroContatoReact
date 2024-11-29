import PropTypes from 'prop-types'
import Button from './eventos/Button'

function Evento () {

    function primeiroEvento () {
        console.log(`Primeiro evento`)
    }
    function segundoEvento () {
        console.log(`Segundo evento`)
    }

    return (
        <>
        
            <p>Clique Para desparar o Evento</p>
            <Button event={primeiroEvento} texto="Primeiro evento "/>
            <Button event={segundoEvento} texto="Segundo evento "/>
        </>

    )
}



export default Evento ;