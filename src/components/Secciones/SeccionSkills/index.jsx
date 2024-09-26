import styles from "./SeccionSkills.module.css";
import Titulo from "../Titulo";
import html from "./bxl-html5.svg";
import css from "./bxl-css3.svg";
import github from "./bxl-github.svg";
import js from "./bxl-javascript.svg";
import react from "./bxl-react.svg";

const SeccionSkills = () => {
    return (
        <section id="skills">
            <Titulo titulo="Skills" />
            <div className={styles.icono__container}>
                <img src={html} alt="Icono HTML" />
                <img src={css} alt="Icono CSS" />
                <img src={js} alt="Icono Javascript" />
                <img src={react} alt="Icono React JS" />
                <img src={github} alt="Icono Github" />
            </div>
        </section>
    );
};

export default SeccionSkills;
