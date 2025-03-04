import link from "./bx-link.svg";

const Formacion = ({ establecimiento, titulo, año }) => {
    return (
        <>
            <p className='flex items-center font-bold bg-secondaryHover p-3 m-2 rounded-sm max-sm:p-2 max-sm:m-1'>
                <img
                    className='pr-4'
                    src={link}
                    alt="Icono link"
                />
                <span className='bg-secondary mr-4 rounded-md px-4 py-1 '>
                    {establecimiento} 
                </span>
                {titulo}  <span className='text-hoverColor ml-auto max-sm:hidden'> {año}</span>
            </p>
        </>
    );
};

export default Formacion;
