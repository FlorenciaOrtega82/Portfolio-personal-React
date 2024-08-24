import styles from "./Formacion.module.css";
import link from "./bx-link.svg";

const Formacion = ({ establecimiento, titulo, año }) => {
    return (
        <>
            <p className={styles.titulo}>
                <img className={styles.container__icon} src={link} />
                {/* //TODO Añadir links con los distintos diplomas*/}
                <span className={styles.establecimiento}>
                    {establecimiento} -
                </span>
                {titulo} - <span className={styles.año}> {año}</span>
            </p>
        </>
    );
};

export default Formacion;
