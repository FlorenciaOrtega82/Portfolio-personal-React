import Titulo from "../Titulo";
import Proyecto from "./Proyecto";
import encriptador from "./image/encriptador_de_texto.png";
import aluraFlix from "./image/alura_flix.png";
import spaceApp from "./image/space-app.png";
import org from "./image/org-app.png";

const SeccionProyecto = () => {
    return (
        <>
            <Titulo titulo="Proyectos" />
            <Proyecto
                imagen={encriptador}
                tituloProyecto="Encriptador de Texto"
                descripcion="
                    Este proyecto es una aplicación web que permite encriptar y desencriptar texto usando reglas específicas, demostrando conceptos básicos de cifrado. "
                repositorio="https://github.com/FlorenciaOrtega82/Encriptador-de-Texto"
                demo="https://florenciaortega82.github.io/Encriptador-de-Texto/"
            />

            <Proyecto
                imagen={aluraFlix}
                tituloProyecto="Alura Flix"
                descripcion="AluraFlix es un challenge de Alura. Es un CRUD que utiliza una API para gestionar videos organizados por categorías."
                repositorio="https://github.com/FlorenciaOrtega82/AluraFlix"
                demo="https://alura-flix-amber.vercel.app"
            />
            <Proyecto
                imagen={spaceApp}
                tituloProyecto="Space-app"
                descripcion="Este proyecto es una aplicación web que muestra información sobre el espacio, permitiendo a los usuarios explorar datos sobre planetas, estrellas y otros cuerpos celestes a través de una interfaz interactiva."
                repositorio="https://space-app-taupe-eight.vercel.app"
                demo="https://space-app-taupe-eight.vercel.app"
            />
            <Proyecto
                imagen={org}
                tituloProyecto="Org"
                descripcion="Aplicación desarrollada en React que organiza tareas utilizando un sistema de listas. Ofrece la posibilidad de agregar, editar y eliminar elementos, lo que facilita la gestión de tareas diarias de manera estructurada y eficiente."
                repositorio="https://github.com/FlorenciaOrtega82/org"
                demo="https://org-xi-sand.vercel.app"
            />
        </>
    );
};

export default SeccionProyecto;
