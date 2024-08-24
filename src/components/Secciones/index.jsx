import SeccionFormacion from "./SeccionFormacion";
import SeccionProyecto from "./SeccionProyectos";
import SeccionSkills from "./SeccionSkills";

const Secciones = () => {
    return (
        <>
            <SeccionSkills />
            <SeccionFormacion />
            <SeccionProyecto />
        </>
    );
};

export default Secciones;
