import LinkInicio from "./LinkInicio";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container__navbar}>
            <LinkInicio seccion="Sobre mi" />
            <LinkInicio seccion="Skills" />
            <LinkInicio seccion="Formación" />
            <LinkInicio seccion="Proyectos" />
            <LinkInicio seccion="Contacto" />
        </div>
    );
};

export default Navbar;
