import { Link } from "react-scroll";

const LinkInicio = ({ seccion }) => {
    return (
        <Link
            to={seccion.toLowerCase().replace(" ", "")}
            smooth={true}
            duration={500}
            className='text-primary tracking-wider font-bold cursor-pointer hover:text-hoverColor max-sm:text-xs max-sm:tracking-normal max-sm:font-semibold'
            spy={true}

        >
            {seccion}
        </Link>
    );
};

export default LinkInicio;
