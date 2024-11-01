import Titulo from "../Titulo";
import Proyecto from "./Proyecto";
import encriptador from "./image/encriptador_de_texto.png";
import aluraFlix from "./image/alura_flix.png";
import spaceApp from "./image/space-app.png";
import org from "./image/org-app.png";

const SeccionProyecto = () => {
    return (
        <section id="proyectos">
            <Titulo titulo="Proyectos" />
            <Proyecto
                imagen={encriptador}
                tituloProyecto="Encriptador de Texto"
                descripcion="
                    Este proyecto es una aplicación web que permite encriptar y desencriptar texto, demostrando conceptos básicos de cifrado. "
                tecnologias={["HTML", "CSS", "JavaScript"]}
                repositorio="https://github.com/FlorenciaOrtega82/Encriptador-de-Texto"
                demo="https://florenciaortega82.github.io/Encriptador-de-Texto/"
            />
            <Proyecto
                imagen={org}
                tituloProyecto="Org"
                descripcion="Aplicación que organiza tareas utilizando un sistema de listas. Ofrece la posibilidad de agregar, editar y eliminar elementos"
                tecnologias={["HTML", "CSS", "JavaScript"]}
                repositorio="https://github.com/FlorenciaOrtega82/org"
                demo="https://org-xi-sand.vercel.app"
            />

            <Proyecto
                imagen={aluraFlix}
                tituloProyecto="Alura Flix"
                descripcion="AluraFlix es un challenge de Alura. Es un CRUD que utiliza una API para gestionar videos organizados por categorías."
                tecnologias={["React", "CSS", "JavaScript", "Vite"]}
                repositorio="https://github.com/FlorenciaOrtega82/AluraFlix"
                demo="https://alura-flix-amber.vercel.app"
            />
            <Proyecto
                imagen={spaceApp}
                tituloProyecto="Space-app"
                descripcion="Este proyecto es una aplicación web que muestra información sobre el espacio, explorar datos a través de una interfaz interactiva."
                tecnologias={["React", "CSS", "JavaScript", "Vite"]}
                repositorio="https://github.com/FlorenciaOrtega82/space-app"
                demo="https://space-app-taupe-eight.vercel.app"
            />
        </section>
    );
};

export default SeccionProyecto;
