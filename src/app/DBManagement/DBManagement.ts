import { Class } from "../../interfaces/class";
import { NewClass } from "../../interfaces/newClass";
import { Temario } from "../../interfaces/temario";
import { videoClass } from "../../interfaces/videoClass";
import { CuestionarioInfoGeneral } from "../../interfaces/cuestionarioInfoGeneral";
import { User } from "../../interfaces/user";
import { Experiment } from "../../interfaces/experiment";
import { Question } from "../../interfaces/question";
import { QuestionarioApi } from "../../interfaces/questionarioApi";
import { NotasUsuarioClase } from "../../interfaces/notasUsuarioClase";

const baseApiUrl = "http://172.17.22.114:8000/";

/*----------------------Classes--------------------- */
//Obtener todas las clases
export async function getClasses() {
    console.log("getClasses()");

    let listClases: Class[] = [];

    const response = await fetch(baseApiUrl + 'clases/');

    if (!response.ok) {
        throw new Error('Error al obtener las clases');
    }

    listClases = await response.json();

    return listClases;
}
//Crear una clase
export async function postClasses(newClass: NewClass) {

    console.log("postClasses()");

    const response = await fetch(
        baseApiUrl + "clases/?" + 
        "nombre_clases=" + newClass.nombre_clases + 
        "&descripcion_clases=" + newClass.descripcion_clases + 
        "&contenido=" + newClass.contenido + 
        "&foto_clases=" + newClass.foto_clases + 
        "&video_clases=" + newClass.video_clases, {

        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify(newClass)
    });

    if (!response.ok) {
        throw new Error('Error al crear la clase');
    }

    const data = await response.json();
    return data;

}

//Obtener clase por id
export async function getClassById(id_clase: number) {
    let classData: Class = {
        contenido: "",
        id_clases: 0,
        video_clases: "",
        descripcion_clases: "",
        foto_clases: "",
        nombre_clases: "",
    };

    try {
        const response = await fetch(baseApiUrl + `clases/${id_clase}`);

        if (!response.ok) {
            throw new Error(`Error al obtener la clase: ${response.status}`);
        }

        classData = await response.json();
    } catch (error) {
        console.error("Error al obtener los datos de la clase:", error);
    }

    return classData;
}

/*------------------------Temarios--------------------------- */

//Obetner temarios de una clase
export async function getClassLessons(id_clase: Number) {

    let lessonsList: Temario[] = [];

    try {

        let response = await fetch(baseApiUrl + 'temarios/clase/' + id_clase);

        lessonsList = await response.json();

    } catch (error) {
        console.log("Error al obtener los temarios: ", error);
    }

    return lessonsList;

}

/*--------------------------Videos-------------------------------*/
//Obtener videos de una clase
export async function getVideosByClass(id_clase: Number) {

    let listVideos: videoClass[] = [];

    try {

        let response = await fetch(baseApiUrl + 'videos/' + id_clase);

        listVideos = await response.json();

    } catch (error) {
        console.log("Error al obtener los videos: ", error);

    }

    return listVideos;

}

/*-------------------------Cuestionarios----------------------- */
//Obtener cuestionarios de una clase
export async function getTestsByClass(id_clase: Number) {

    let listTests: CuestionarioInfoGeneral[] = [];

    try {

        let response = await fetch(baseApiUrl + 'cuestionarios/clase/' + id_clase);

        listTests = await response.json();

    } catch (error) {
        console.log("Error al obtener los cuestionarios: ", error);
    }

    return listTests;

}

/*----------------------------Usuarios------------------------------ */
//Obtener participantes de una clase
export async function getClassParticipants(id_clase: Number) {

    let listParticipants: User[] = [];

    try {

        let response = await fetch(baseApiUrl + 'clases/' + id_clase + '/participantes');

        listParticipants = await response.json();

    } catch (error) {
        console.log("Error al obtener los participantes: ", error);
    }

    return listParticipants;

}


/*--------------------------Experimentos-------------------- */
export async function getExperiments() {

    let listExperiments: Experiment[] = [];

    try {

        let response = await fetch(baseApiUrl + 'experimentos/');

        listExperiments = await response.json();

    } catch (error) {
        console.log("Error al obtener los experimentos: ", error);
    }

    return listExperiments;

}

export async function getExperimentById(id_experiment: Number) {

    let experiment: Experiment = {
        id_experimento: 0,
        nombre_experimento: "",
        descrip_experimento: "",
        foto_experimento: "",
        video_experimento: "",
    };

    try {

        let response = await fetch(baseApiUrl + 'experimentos/' + id_experiment);

        experiment = await response.json();

    } catch (error) {
        console.log("Error al obtener el experimento: ", error);
    }

    return experiment;

}

/*---------------------Preguntas Cuestionario-------------------- */

export async function getPreguntasCuestionario(idCuestionario: Number) {

    let listaPreguntasCuestionario: Question[] = [];

    try {

        let response = await fetch(baseApiUrl + 'preguntas/questionario/' + idCuestionario);

        listaPreguntasCuestionario = await response.json();

    } catch (error) {
        console.log("Error al obtener las preguntas del cuestionario: ", error);
    }

    return listaPreguntasCuestionario;

}

/*---------------------Notas usuario clase-------------------- */

export async function getNotasUsuarioClase(idUsuario: number, idClase: number) {

    let listaNotasUsuarioClase: NotasUsuarioClase[] = [];

    try {

        let response = await fetch(baseApiUrl + 'notas/clase/' + idClase + '/usuario/' + idUsuario);

        listaNotasUsuarioClase = await response.json();

    } catch (error) {
        console.log("Error al obtener las notas del usuario en la clase: ", error);
    }

    return listaNotasUsuarioClase;

}