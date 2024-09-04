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
                <img src={html} />
                <img src={css} />
                <img src={js} />
                <img src={react} />
                <img src={github} />
            </div>
        </section>
    );
};

export default SeccionSkills;
