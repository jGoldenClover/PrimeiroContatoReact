import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import style from './Footer.module.css'

function Footer () {
    return (
        <footer>
            
            <ul className={style.socialList}>
                <li> <FaFacebook/> </li>
                <li> <FaInstagram/> </li>
                <li> <FaLinkedin/> </li>
            </ul>

        </footer>
    )
}

export default Footer ;