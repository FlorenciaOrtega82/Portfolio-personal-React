import Contacto from "../Contacto";
import Presentacion from "../Presentacion";
import Secciones from "../Secciones";
import SobreMi from "../SobreMi";

const Container = () => {
    return (
        <div className=" mx-60 mt-20 text-xl max-sm:mx-16 max-sm:text-sm max-md:mx-8 max-md:text-base  max-lg:mx-[4.5rem] max-lg:text-lg ">
            <SobreMi />
            <Presentacion />
            <Secciones />
            <Contacto />
        </div>
    );
};

export default Container;
