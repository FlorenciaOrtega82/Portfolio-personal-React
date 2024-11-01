import Titulo from "../Titulo";
import html from "./bxl-html5.svg";
import css from "./bxl-css3.svg";
import github from "./bxl-github.svg";
import js from "./bxl-javascript.svg";
import react from "./bxl-react.svg";
import Vite from "./svg-vite";

const SeccionSkills = () => {
    return (
        <section id="skills" className='pt-10 -mt-10'>
            <Titulo titulo="Skills" />
            <div className="flex justify-center items-center flex-row gap-12 max-sm:w-16">
                <img
                    src={html}
                    alt="Icono HTML"
                    className="bg-violet-200 rounded-md p-1 w-24"
                />
                <img
                    src={css}
                    alt="Icono CSS"
                    className="bg-violet-200 rounded-md p-1 w-24"
                />
                <img
                    src={js}
                    alt="Icono Javascript"
                    className="bg-violet-200 rounded-md p-1 w-24"
                />
                <img
                    src={react}
                    alt="Icono React JS"
                    className="bg-violet-200 rounded-md p-1 w-24"
                />
                <img
                    src={github}
                    alt="Icono Github"
                    className="bg-violet-200 rounded-md p-1 w-24"
                />
                <Vite className="bg-violet-200 rounded-md p-1 w-24 h-auto" />
            </div>
        </section>
    );
};

export default SeccionSkills;
