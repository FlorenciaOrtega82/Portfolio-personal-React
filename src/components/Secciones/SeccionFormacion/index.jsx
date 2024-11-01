import Titulo from "../Titulo";
import Formacion from "./Formacion";

const SeccionFormacion = () => {
    return (
        <section id="formación">
            <Titulo titulo="Formación académica" />
            <div className='flex justify-around flex-col '>
                <Formacion
                    establecimiento="Programa ONE"
                    titulo="Front End React "
                    año="2024"
                />
                <Formacion
                    establecimiento="UTN"
                    titulo="Técnico superior en programación"
                    año="2023"
                />
                <Formacion
                    establecimiento="Codo a Codo"
                    titulo="Full Stack Python "
                    año="2022"
                />
            </div>
        </section>
    );
};

export default SeccionFormacion;
