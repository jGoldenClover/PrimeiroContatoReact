import { Link } from "react-router-dom";
import styles from './NavBar.module.css'

function NavBar () {
    return (
        <ul className={styles.lista}>
            <li className={styles.item}>
                <Link className={styles.link} to="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/empresa">Empresa</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to="/contato">Contato</Link>
            </li>
        </ul>
    )
}

export default NavBar ;

