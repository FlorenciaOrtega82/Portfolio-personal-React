import Contacto from "../Contacto";
import Presentacion from "../Presentacion";
import Secciones from "../Secciones";
import SobreMi from "../SobreMi";
import styles from "./Container.module.css";

const Container = () => {
    return (
        <div className={styles.container__body}>
            <SobreMi />
            <Presentacion />
            <Secciones />
            <Contacto />
        </div>
    );
};

export default Container;
