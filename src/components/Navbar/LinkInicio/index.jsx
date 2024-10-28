import { Link } from "react-scroll";

const LinkInicio = ({ seccion }) => {
    return (
        <Link
            to={seccion.toLowerCase().replace(" ", "")}
            smooth={true}
            duration={500}
            className='text-base tracking-wider font-bold cursor-pointer hover:text-violet-800 max-sm:text-xs max-sm:tracking-normal max-sm:font-semibold'
            spy={true}

        >
            {seccion}
        </Link>
    );
};

export default LinkInicio;
