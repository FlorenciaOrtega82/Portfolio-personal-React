import { Link } from "react-scroll";
import styles from "./LinkInicio.module.css";

const LinkInicio = ({ seccion }) => {
    return (
        <Link
            to={seccion.toLowerCase().replace(" ", "")}
            smooth={true}
            duration={500}
            className={styles.link}
            spy={true}
            activeClass={styles.activeLink}
        >
            {seccion}
        </Link>
    );
};

export default LinkInicio;
