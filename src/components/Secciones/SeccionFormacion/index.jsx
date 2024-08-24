import styles from "./SeccionFormacion.module.css";
import Titulo from "../Titulo";
import Formacion from "./Formacion";

const SeccionFormacion = () => {
    return (
        <>
            <Titulo titulo="Formación académica" />
            <div className={styles.formacion__container}>
                <Formacion
                    establecimiento="Programa ONE"
                    titulo="Front End React "
                    año="2024"
                />
                <Formacion
                    establecimiento="UTN"
                    titulo="Técnico superior en programación "
                    año="2023"
                />
                <Formacion
                    establecimiento="Codo a Codo"
                    titulo="Full Stack Python "
                    año="2022"
                />
            </div>
        </>
    );
};

export default SeccionFormacion;
