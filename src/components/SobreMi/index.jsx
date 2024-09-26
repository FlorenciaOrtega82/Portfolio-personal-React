import LinkRedes from "./LinkRedes";
import styles from "./SobreMi.module.css";
import curriculum from "./image/curriculum.pdf";

const SobreMi = () => {
    return (
        <section id="sobremi">
            <p className={styles.presentacion}>
                Hola! Mi nombre es{" "}
                <span className={styles.nombre}>Florencia</span>
            </p>
            <p className={styles.info__text}>
                Soy desarrolladora front end apasionada por crear experiencias
                web cautivadoras. Experta en HTML, CSS, JavaScript y React, en
                busca de proyectos desafiantes.
            </p>

            <LinkRedes
                red="Github"
                link="https://github.com/FlorenciaOrtega82"
            />
            <LinkRedes
                red="Linkedin"
                link="https://www.linkedin.com/in/flor-ortega/"
            />

            <LinkRedes red="Curriculum" link={curriculum} alt='curriculum' />
        </section>
    );
};

export default SobreMi;
