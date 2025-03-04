const Proyecto = ({
    imagen,
    tituloProyecto,
    repositorio,
    demo,
    tecnologias = [],
}) => {
    return (
        <>
            <div className="flex items-center justify-evenly bg-secondary mt-4 p-2 rounded-sm max-sm:flex max-sm:flex-col ">
                <img
                    src={imagen}
                    className=" max-h-40 max-w-96 mr-16 border-solid border-x-2 max-sm:m-0 max-sm:p-0 max-md:mr-7 max-sm:max-h-28  "
                    alt="Miniatura de proyecto"
                />
                <div className="my-2 text-stone-950 ">
                    <h4 className="flex text-xl font-semibold max-lg:my-2 max-sm:w-fit max-sm:text-lg max-md:justify-center">
                        {tituloProyecto}
                    </h4>

                    <div className="flex flex-wrap gap-2 my-2 max-md:justify-center">
                        {tecnologias.map((tecnologia) => (
                            <span className="bg-hoverColor text-gray-800 px-2 py-1 rounded-md text-sm font-bold tracking-wide">
                                {tecnologia}
                            </span>
                        ))}
                    </div>

                    <div className=" flex max-sm:justify-center max-sm:flex max-sm:gap-5 ">
                        <a href={repositorio} target="_blank">
                            <button className=" bg-secondaryHover cursor-pointer py-1 px-2 rounded-sm font-medium mr-1 border-2  fy-center border-violet-900 text-violet-900  hover:text-violet-950 hover:border-1 hover:bg-opacity-70">
                                Repositorio
                            </button>
                        </a>
                        <a href={demo} target="_blank">
                            <button className="border-2 border-violet-900 cursor-pointer py-1 px-2 rounded-sm bg-secondaryColor text-white tracking-wide hover:text-slate-200 hover:border-1 hover:bg-opacity-80">
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
