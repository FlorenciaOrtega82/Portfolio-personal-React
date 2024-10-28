import LinkInicio from "./LinkInicio";

const Navbar = () => {
    return (
        <div className="flex justify-evenly max-2xl:px-24 pt-8 p-4 max-sm:pt-6 ">
            <LinkInicio seccion="Sobre mi" />
            <LinkInicio seccion="Skills" />
            <LinkInicio seccion="Formación" />
            <LinkInicio seccion="Proyectos" />
            <LinkInicio seccion="Contacto" />
        </div>
    );
};

export default Navbar;
