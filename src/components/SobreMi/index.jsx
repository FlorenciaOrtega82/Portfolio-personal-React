import LinkRedes from "./LinkRedes";
import curriculum from "./image/curriculum.pdf";

const SobreMi = () => {
    return (
        <section id="sobremi">
            <p className='mb-4 text-3xl font-bold max-sm:text-2xl'>
                Hola! Mi nombre es{" "}
                <span className='text-violet-800'>Florencia</span>
            </p>
            <p className='text-lg max-sm:text-base'>
                Soy desarrolladora front end apasionada por crear experiencias
                web cautivadoras. Experta en HTML, CSS, JavaScript y React, en
                busca de proyectos desafiantes.
            </p>

            <LinkRedes
                red="Github"
                link="https://github.com/FlorenciaOrtega82"
            />
            <LinkRedes
                red="Linkedin"
                link="https://www.linkedin.com/in/flor-ortega/"
            />

            <LinkRedes red="Curriculum" link={curriculum} alt='curriculum' />
        </section>
    );
};

export default SobreMi;
