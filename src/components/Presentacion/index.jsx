import styles from "./Presentacion.module.css";

const Presentacion = () => {
    return (
        <>
            <div  className={styles.container__presentacion}>
                <h2 className={styles.titulo__presentacion}>Sobre Mi</h2>
                <p className={styles.descripcion__presentacion}>
                    Hola! Soy Técnica Universitaria en Programación apasionada
                    por la tecnología y el desarrollo de software. Tengo
                    habilidades en HTML, CSS, JavaScript, React Js, y más. Mi objetivo es adquirir experiencia laboral y seguir
                    desarrollándome como desarrolladora de software, interesada
                    en proyectos desafiantes y colaboración en la industria
                    tecnológica.
                </p>
            </div>
        </>
    );
};

export default Presentacion;
