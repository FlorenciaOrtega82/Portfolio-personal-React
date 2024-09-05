import styles from "./Proyecto.module.css";

const Proyecto = ({
    imagen,
    tituloProyecto,
    descripcion,
    repositorio,
    demo,
}) => {
    return (
        <>
            <div className={styles.proyecto__container}>
                <img src={imagen} className={styles.proyecto__miniatura} />
                <div className={styles.container__contenido}>
                    <h4 className={styles.proyecto__titulo}>
                        {tituloProyecto}
                    </h4>
                    <p className={styles.proyecto__descripcion}>
                        {descripcion}
                    </p>
                    <div>
                        <a href={repositorio} target="_blank">
                            <button className={styles.boton__repositorio}>
                                Repositorio
                            </button>
                        </a>
                        <a href={demo} target="_blank">
                            <button className={styles.boton__demo}>
                                Ver demo
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Proyecto;
