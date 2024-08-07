import styles from "./LinkInicio.module.css";

const LinkInicio = ({ seccion }) => {
    return <a className={styles.link}>{seccion}</a>;
};

export default LinkInicio;
