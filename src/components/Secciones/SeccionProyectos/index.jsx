import Titulo from "../Titulo";
import Proyecto from "./Proyecto";
import encriptador from "./image/encriptador_de_texto.png";
import aluraFlix from "./image/alura_flix.png";
import spaceApp from "./image/space-app.png";
import org from "./image/org-app.png";

const SeccionProyecto = () => {
    return (
        <section id="proyectos" className="pt-10 -mt-10">
            <Titulo titulo="Proyectos" />
            <Proyecto
                imagen={encriptador}
                tituloProyecto="Encriptador de Texto"
                tecnologias={["HTML", "CSS", "JavaScript"]}
                repositorio="https://github.com/FlorenciaOrtega82/Encriptador-de-Texto"
                demo="https://florenciaortega82.github.io/Encriptador-de-Texto/"
            />
            <Proyecto
                imagen={org}
                tituloProyecto="Org"
                tecnologias={["HTML", "CSS", "JavaScript"]}
                repositorio="https://github.com/FlorenciaOrtega82/org"
                demo="https://org-xi-sand.vercel.app"
            />

            <Proyecto
                imagen={aluraFlix}
                tituloProyecto="Alura Flix"
                tecnologias={["React", "CSS", "JavaScript", "Vite"]}
                repositorio="https://github.com/FlorenciaOrtega82/AluraFlix"
                demo="https://alura-flix-amber.vercel.app"
            />
            <Proyecto
                imagen={spaceApp}
                tituloProyecto="Space-app"
                tecnologias={["React", "CSS", "JavaScript", "Vite"]}
                repositorio="https://github.com/FlorenciaOrtega82/space-app"
                demo="https://space-app-taupe-eight.vercel.app"
            />
        </section>
    );
};

export default SeccionProyecto;
