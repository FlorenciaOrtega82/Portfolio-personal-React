import LinkRedes from "./LinkRedes";
import styles from "./SobreMi.module.css";

const SobreMi = () => {
    return (
        <>
            <p className={styles.presentacion}>
                Hola! Mi nombre es{" "}
                <span className={styles.nombre}>Florencia</span>
            </p>
            <p className={styles.info__text}>
                Soy desarrolladora front end apasionada por crear experiencias
                web cautivadoras. Experta en HTML, CSS, JavaScript y React, en
                busca de proyectos desafiantes.
            </p>
            {/* //TODO Añadir links a las distintas redes sociales  */}
            <LinkRedes red="Github" />
            <LinkRedes red="Linkedin" />
            <LinkRedes red="Curriculum" />
        </>
    );
};

export default SobreMi;
