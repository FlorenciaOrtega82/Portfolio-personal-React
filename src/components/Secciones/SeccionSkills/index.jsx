import styles from "./SeccionSkills.module.css";
import Titulo from "../Titulo";
import html from "./bxl-html5.svg";
import css from "./bxl-css3.svg";
import github from "./bxl-github.svg";
import js from "./bxl-javascript.svg";
import react from "./bxl-react.svg";

const SeccionSkills = () => {
    return (
        <>
            <Titulo titulo="Skills" />
            <div className={styles.icono__container}>
                <img className={styles.container__icon} src={html} />
                <img className={styles.container__icon} src={css} />
                <img className={styles.container__icon} src={js} />
                <img className={styles.container__icon} src={react} />
                <img className={styles.container__icon} src={github} />
            </div>
        </>
    );
};

export default SeccionSkills;
