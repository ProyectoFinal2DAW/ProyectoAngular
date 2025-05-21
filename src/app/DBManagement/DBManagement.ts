import { Class } from "../../interfaces/class";
import { NewClass } from "../../interfaces/newClass";
import { Temario } from "../../interfaces/temario";
import { videoClass } from "../../interfaces/videoClass";
import { CuestionarioInfoGeneral } from "../../interfaces/cuestionarioInfoGeneral";
import { User } from "../../interfaces/user";
import { Experiment } from "../../interfaces/experiment";
import { Question } from "../../interfaces/question";
import { NotasUsuarioClase } from "../../interfaces/notasUsuarioClase";
import { NewTemario } from "../../interfaces/newTemario";
import { NewCuestionario } from "../../interfaces/newCuestionario";
import { NewPregunta } from "../../interfaces/newPregunta";
import { NewVideo } from "../../interfaces/newVideo";
import { UpdateClase } from "../../interfaces/updateClase";
import { ContenidoTemarioDescripcion } from "../../interfaces/contenidoTemarioDescripcion";
import { PostResultadoCuestionario } from "../../interfaces/postResultadoCuestionario";
import { NewExperimento } from "../../interfaces/newExperimento";
import { ExperimentData } from "../../interfaces/experimentData";
import { Role } from "../../interfaces/role";
import { NewUser } from "../../interfaces/newUser";
import { getUserImageWithEmail } from "./AzureManagement";
import { UpdateTemario } from "../../interfaces/updateTemario";

const baseApiUrl = "http://172.17.22.114:8001/";

/*------------------ Subir archivos -----------------*/

export async function uploadFile(file: File) {

    console.log("file: " + file);

    const formData = new FormData();
    formData.append("file", file);

    /*     console.log("formData: ", formData);
     */
    try {
        const response = await fetch(baseApiUrl + "upload/", {
            method: "POST",
            body: formData,
        });

        const text = await response.text();
        console.log("Response body:", text);

        // Convertimos el texto en un objeto JSON
        const data = JSON.parse(text);

        // Accedemos al nombre de la imagen
        const filename = data.filename;

        console.log("Nombre de la imagen:", filename);



        if (!response.ok) {
            throw new Error("Error al subir el archivo");
        }

        return filename;

        /* const url = response.url;
        //const filename = response.remote_path;
        console.log("response", response);
        //const data = await response.json();
        return response.url; */
    } catch (error) {
        console.error("Error en uploadFile:", error);
        throw error;
    }
}


/*----------------------Classes--------------------- */
//Obtener todas las clases
export async function getClasses() {
    //console.log("getClasses()");

    let listClases: Class[] = [];

    const response = await fetch(baseApiUrl + 'clases/');
    console.log("response: ", response);

    if (!response.ok) {
        throw new Error('Error al obtener las clases');
    }

    listClases = await response.json();

    return listClases;
}
export async function getClassesByIdUser(id_user: number) {
    //console.log("getClasses()");

    let listClases: Class[] = [];

    const response = await fetch(baseApiUrl + 'usuarios/' + id_user + "/clases");
    console.log("response: ", response);

    if (!response.ok) {
        throw new Error('Error al obtener las clases');
    }

    listClases = await response.json();

    return listClases;
}
//Crear una clase
export async function postClasses(newClass: NewClass) {

    //console.log("postClasses()");

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

export async function putClases(claseUpdate: UpdateClase) {

    //console.log("putClasses()");

    try {
        const response = await fetch(
            baseApiUrl + "clases/" + claseUpdate.clase_id +
            "?nombre_clases=" + claseUpdate.nombre_clases +
            "&descripcion_clases=" + claseUpdate.descripcion_clases +
            "&contenido=" + claseUpdate.contenido +
            "&foto_clases=" + claseUpdate.foto_clases +
            "&video_clases=" + claseUpdate.video_clases, {

            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(newClass)
        });

        if (!response.ok) {
            throw new Error('Error al actualizar la clase');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        //console.log("Error al obtener el la clase: ", error);
        alert("No se ha podido actualizar la clase");
        return error;
    }
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

export async function deleteClassById(idClass: number) {

    //console.log("deleteCuestionarioById()");

    try {
        const response = await fetch(
            baseApiUrl + "clases/" + idClass, {

            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(newClass)
        });

        if (!response.ok) {
            throw new Error('Error al eliminar la clase');
        }

        const data = await response.json();
        alert("Clase eliminada correctamente");
        return data;

    } catch (error) {
        //console.log("Error al eliminar el cuestionario: ", error);
        alert("No se ha podido eliminar la clase");
        return error;
    }

}

/*------------------------Temarios--------------------------- */

//Obetner temarios de una clase
export async function getClassLessons(id_clase: Number) {

    let lessonsList: Temario[] = [];

    try {
        let response = await fetch(baseApiUrl + 'temarios/clase/' + id_clase);

        if (response.status === 404) {
            return lessonsList;
        }

        lessonsList = await response.json();

    } catch (error) {
        // Solo mostrar el error si no es 404
        //console.log("Error al obtener los temarios: ", error);
    }

    return lessonsList;
}

export async function getContenidoTemario(id_clase: number, id_temario: number) {

    let listaContenidos = [];

    let contenidoTemario: ContenidoTemarioDescripcion = {
        id_temario: 0,
        id_clases: 0,
        nombre_temario: "",
        descrip_temario: "",
        contenido: "",
        foto_temario: "",
        videos_temario: "",
    }

    try {
        let response = await fetch(baseApiUrl + 'temarios/clase/' + id_clase + "/filter?id_temario=" + id_temario);

        if (response.status === 404) {
            return contenidoTemario;
        }

        // Si la respuesta es exitosa, se procesan los datos
        listaContenidos = await response.json();

        contenidoTemario = listaContenidos[0];

    } catch (error) {
        // Solo mostrar el error si no es 404
        //console.log("Error al obtener el contenido del temario: ", error);
    }

    return contenidoTemario;
}


export async function postTemario(newTemario: NewTemario) {

    console.log(baseApiUrl + "temarios/?" +
        "id_clases=" + newTemario.id_clases +
        "&nombre_temario=" + newTemario.nombre_temario +
        "&descrip_temario=" + newTemario.descrip_temario +
        "&contenido=" + newTemario.contenido +
        "&foto_temario=" + newTemario.foto_temario +
        "&videos_temario=" + newTemario.videos_temario);

    try {
        const response = await fetch(
            baseApiUrl + "temarios/?" +
            "id_clases=" + newTemario.id_clases +
            "&nombre_temario=" + newTemario.nombre_temario +
            "&descrip_temario=" + newTemario.descrip_temario +
            "&contenido=" + newTemario.contenido +
            "&foto_temario=" + newTemario.foto_temario +
            "&videos_temario=" + newTemario.videos_temario, {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(newClass)
        });

        if (!response.ok) {
            throw new Error('Error al crear el temario');
        }

        const data = await response.json();
        alert("Temario creado correctamente");
        return data;

    } catch (error) {
        //console.log("Error al obtener el temario: ", error);
        alert("No se ha podido guardar el temario");
        return error;
    }
}
export async function putTemario(newTemario: UpdateTemario) {

    console.log(baseApiUrl + "temarios/ " + newTemario.temario_id + "/?" +
        "id_clases=" + newTemario.id_clases +
        "&nombre_temario=" + newTemario.nombre_temario +
        "&descrip_temario=" + newTemario.descrip_temario +
        "&contenido=" + newTemario.contenido +
        "&foto_temario=" + newTemario.foto_temario +
        "&videos_temario=" + newTemario.videos_temario);

    try {
        const response = await fetch(
            baseApiUrl + "temarios/ " + newTemario.temario_id + "/?" +
            "id_clases=" + newTemario.id_clases +
            "&nombre_temario=" + newTemario.nombre_temario +
            "&descrip_temario=" + newTemario.descrip_temario +
            "&contenido=" + newTemario.contenido +
            "&foto_temario=" + newTemario.foto_temario +
            "&videos_temario=" + newTemario.videos_temario, {

            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(newClass)
        });

        if (!response.ok) {
            throw new Error('Error al crear la clase');
        }

        const data = await response.json();

        alert("Temario actualizado correctamente");
        return data;

    } catch (error) {
        //console.log("Error al obtener el experimento: ", error);
        alert("No se ha podido guardar el temario");
        return error;
    }
}

export async function deleteTemarioById(idTemario: number) {

    //console.log("deleteTemarioById()");

    try {
        const response = await fetch(
            baseApiUrl + "temarios/" + idTemario, {

            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(newClass)
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el temario');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        //console.log("Error al eliminar el temario: ", error);
        alert("No se ha podido eliminar el temario");
        return error;
    }

}

/*--------------------------Videos-------------------------------*/
//Obtener videos de una clase
export async function getVideosByClass(id_clase: Number) {

    let listVideos: videoClass[] = [];

    try {

        let response = await fetch(baseApiUrl + 'temarios/clase/' + id_clase + "/videos");

        listVideos = await response.json();

    } catch (error) {
        //console.log("Error al obtener los videos: ", error);

    }

    return listVideos;

}

export async function postVideoClass(id_clases: number, newVideo: NewVideo) {


    let video = {
        titulo_video: newVideo.titulo_video,
        foto_temario: newVideo.foto_temario,
        videos_temario: newVideo.videos_temario
    }

    //console.log("postVideoClass()");

    try {

        const response = await fetch(
            baseApiUrl + "temarios/clase/" + id_clases + "/videos?id_temario=" + newVideo.temario_video,
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(video)
            });

        if (!response.ok) {
            throw new Error('Error al crear el video');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        //console.log("Error al obtener el video creado: ", error);
        alert("No se ha podido guardar el video");
        return error;
    }
}

/*-------------------------Datos experimentos----------------- */
export async function getExperimentsDataById(id_experiment: number) {

    let experimentsDataList: ExperimentData[] = [];
    let experimentsData: ExperimentData = {
        id_datos: 0,
        id_experimento: 0,
        tiempo1: new Date(),
        tiempo2: new Date(),
        tiempo3: new Date(),
        tiempo4: new Date(),
        tiempo5: new Date()
    };

    try {

        let response = await fetch(baseApiUrl + 'datos_experimentos/experimento/' + id_experiment);

        experimentsDataList = await response.json();

        experimentsData = experimentsDataList[experimentsDataList.length - 1];

    } catch (error) {
        //console.log("Error al obtener los videos: ", error);

    }

    return experimentsData;

}


/*-------------------------Cuestionarios----------------------- */
//Obtener cuestionarios de una clase
export async function getTestsByClass(id_clase: Number) {

    let listTests: CuestionarioInfoGeneral[] = [];

    try {

        let response = await fetch(baseApiUrl + 'cuestionarios/clase/' + id_clase);

        listTests = await response.json();

    } catch (error) {
        //console.log("Error al obtener los cuestionarios: ", error);
    }

    return listTests;

}
export async function postCuestionario(newCuestionario: NewCuestionario, listaPreguntas: NewPregunta[], id_clases: number, id_temario: number) {

    //1. Crear POST Cuestionarios y obtener el id
    //2. Crear POST Preguntas por cada pregunta utilizando los datos del formulario
    //   y el id devuelto en el POST 1
    //3. Crear POST Temarios Cuestionarios con el id de la clase 
    //   seleccionada, el id cuestionario devuelto en el POST 1 y poner 1 en el temario

    //console.log("postCuestionario()");

    try {

        //console.log("ruta API: ", baseApiUrl + "cuestionarios/?" +
        "nombre_cuestionario=" + newCuestionario.nombre_cuestionario +
            "&descrip_cuestionario=" + newCuestionario.descrip_cuestionario +
            "&foto_cuestionario=" + (newCuestionario.foto_cuestionario || "") +
            "&video_cuestionario=" + (newCuestionario.video_cuestionario || "");

        const response = await fetch(
            baseApiUrl + "cuestionarios/?" +
            "nombre_cuestionario=" + newCuestionario.nombre_cuestionario +
            "&descrip_cuestionario=" + newCuestionario.descrip_cuestionario +
            "&foto_cuestionario=" + (newCuestionario.foto_cuestionario || "") +
            "&video_cuestionario=" + (newCuestionario.video_cuestionario || ""),
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify(newClass)
            });

        if (!response.ok) {
            throw new Error('Error al crear el cuestionario');
        }

        const data = await response.json();

        //console.log("data: ", data);

        const idCuestionario = data.id_questionario;



        //Si hay algun valor en idCuestionario hacer...
        if (idCuestionario) {

            //Crear un post para cada pregunta del array
            if (listaPreguntas.length > 0) {
                for (let i = 0; i < listaPreguntas.length; i++) {
                    const element = listaPreguntas[i];

                    postPregunta(element, idCuestionario);

                }
            }

            //Crear un post en la tabla de la relacion N:M
            postTemariosCuestionarios(id_clases, idCuestionario, id_temario)


            return true;
        }
        return false;


    } catch (error) {
        //console.log("Error al obtener el cuestionario: ", error);
        alert("No se ha podido guardar el cuestionario");
        return false;
    }
}
export async function postPregunta(newPregunta: NewPregunta, idCuestionario: number) {


    //console.log("postPregunta()");

    try {

        //console.log("ruta API: ", baseApiUrl + "preguntas/?" +
        "id_questionario=" + idCuestionario +
            "&enunciado=" + newPregunta.enunciado +
            "&respuesta=" + "11" +
            "&correcta=" + newPregunta.correcta +
            "&respuesta1=" + newPregunta.respuesta1 +
            "&respuesta2=" + newPregunta.respuesta2 +
            "&respuesta3=" + newPregunta.respuesta3;

        const response = await fetch(
            baseApiUrl + "preguntas/?" +
            "id_questionario=" + idCuestionario +
            "&enunciado=" + newPregunta.enunciado +
            "&respuesta=" + "11" +
            "&correcta=" + newPregunta.correcta +
            "&respuesta1=" + newPregunta.respuesta1 +
            "&respuesta2=" + newPregunta.respuesta2 +
            "&respuesta3=" + newPregunta.respuesta3,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify(newClass)
            });

        if (!response.ok) {
            throw new Error('Error al crear la pregunta');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        //console.log("Error al obtener la pregunta: ", error);
        alert("No se ha podido guardar la pregunta");
        return error;
    }
}

export async function postTemariosCuestionarios(id_clases: number, id_questionario: number, id_temario: number) {


    //console.log("postTemariosCuestionarios()");

    try {

        //console.log("ruta API: ", baseApiUrl + "temarios_cuestionarios/?" +
        "id_clases=" + id_clases +
            "&id_questionario=" + id_questionario +
            "&id_temario=" + id_temario;

        const response = await fetch(
            baseApiUrl + "temarios_cuestionarios/?" +
            "id_clases=" + id_clases +
            "&id_questionario=" + id_questionario +
            "&id_temario=" + id_temario,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify(newClass)
            });

        if (!response.ok) {
            throw new Error('Error al crear temarios-cuestionarios');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        //console.log("Error al obtener temarios-cuestionarios: ", error);
        alert("No se ha podido guardar temarios-cuestionarios");
        return error;
    }
}

export async function deleteCuestionarioById(idcuestionario: number) {

    //console.log("deleteCuestionarioById()");

    try {
        const response = await fetch(
            baseApiUrl + "cuestionarios/" + idcuestionario, {

            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(newClass)
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el cuestionario');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        //console.log("Error al eliminar el cuestionario: ", error);
        alert("No se ha podido eliminar el cuestionario");
        return error;
    }

}

/*----------------------------Usuarios------------------------------ */
//Obtener participantes de una clase
export async function getClassParticipants(id_clase: Number) {

    let listParticipants: User[] = [];

    try {

        let response = await fetch(baseApiUrl + 'clases/' + id_clase + '/participantes');

        listParticipants = await response.json();

        if (listParticipants.length > 0) {
            for (let i = 0; i < listParticipants.length; i++) {
                const element = listParticipants[i];

                let imagen = await getUserImageWithEmail(sessionStorage.getItem("accessToken") || "", element.email);

                listParticipants[i].profileImage = imagen;


            }
        }

    } catch (error) {
        //console.log("Error al obtener los participantes: ", error);
    }

    return listParticipants;

}

export async function getUserWithEmail(email: string) {

    let user: User | null = null;

    try {

        let response = await fetch(baseApiUrl + 'usuarios/email/' + email);

        if (response.status === 404) {
            return null;
        } else {
            user = await response.json();
            return user;
        }


    } catch (error) {
        console.log("Error al obtener el usuario con el email: ", error);
        return null;
    }

}

export async function postUser(newUser: NewUser) {

    try {
        console.log(
            baseApiUrl + "usuarios/?" +
            "id_roles=" + newUser.id_roles +
            "&usuario=" + newUser.usuario +
            "&email=" + newUser.email +
            "&contrasena=" + newUser.contrasena +
            "&estado=" + newUser.estado +
            "&profileImage=" + newUser.profileImage);

        const response = await fetch(
            baseApiUrl + "usuarios/?" +
            "id_roles=" + newUser.id_roles +
            "&usuario=" + newUser.usuario +
            "&email=" + newUser.email +
            "&contrasena=" + newUser.contrasena +
            "&estado=" + newUser.estado +
            "&profileImage=" + newUser.profileImage, {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(newClass)
        });

        console.log("response: ", response);

        if (!response.ok) {
            throw new Error('Error al crear el usuario');
        }

        const data = await response.json();


        return data;

    } catch (error) {
        //console.log("Error al obtener el temario: ", error);
        alert("No se ha podido guardar el usuario");
        return error;
    }
}

/*----------------------- Clases Usuarios ---------------------- */

export async function postUserIntoClass(id_user: number, id_clase: number) {

    try {
        const response = await fetch(
            baseApiUrl + "clases_usuarios/?" +
            "id_usuarios=" + id_user +
            "&id_clases=" + id_clase, {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(newClass)
        });

        if (!response.ok) {
            throw new Error('Error al asignar el usuario a la clase');
        }

        const data = await response.json();

        alert("Usuario asignado a la clase correctamente");

        return data;

    } catch (error) {
        //console.log("Error al obtener el temario: ", error);
        alert("No se ha podido asignar el usuario a la clase");
        return error;
    }
}

export async function deleteParticipantOfClass(idUser: number, idClass: number) {

    //console.log("deleteCuestionarioById()");

    try {
        const response = await fetch(
            baseApiUrl + "clases_usuarios/" + idUser + "/" + idClass, {

            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(newClass)
        });

        if (!response.ok) {
            throw new Error('Error al eliminar usuario de la clase');
        }

        const data = await response.json();
        alert("Usuario eliminado de la clase correctamente");
        return data;

    } catch (error) {
        //console.log("Error al eliminar el cuestionario: ", error);
        alert("No se ha podido eliminar el usuario");
        return error;
    }

}


/*-------------------------- User Roles -------------------- */
export async function getUserRoles() {

    let listUserRoles: Role[] = [];

    try {

        let response = await fetch(baseApiUrl + 'roles/');

        listUserRoles = await response.json();

    } catch (error) {
        //console.log("Error al obtener los participantes: ", error);
    }

    return listUserRoles;

}


/*--------------------------Experimentos-------------------- */
export async function getExperiments() {

    let listExperiments: Experiment[] = [];

    try {

        let response = await fetch(baseApiUrl + 'experimentos/');

        listExperiments = await response.json();

    } catch (error) {
        //console.log("Error al obtener los experimentos: ", error);
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
        asignatura: ""
    };

    try {

        let response = await fetch(baseApiUrl + 'experimentos/' + id_experiment);

        experiment = await response.json();

    } catch (error) {
        //console.log("Error al obtener el experimento: ", error);
    }

    return experiment;

}

export async function postExperimento(newExperimento: NewExperimento) {

    //console.log("postExperimento()");

    const response = await fetch(
        baseApiUrl + "experimentos/?" +
        "nombre_experimento=" + newExperimento.nombre_experimento +
        "&descrip_experimento=" + newExperimento.descrip_experimento +
        "&foto_experimento=" + newExperimento.foto_experimento +
        "&video_experimento=" + newExperimento.video_experimento, {

        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify(newClass)
    });

    if (!response.ok) {
        throw new Error('Error al crear el experimento');
    } else {
        alert("Experimento creado correctamente");
    }

    const data = await response.json();
    return data;

}

export async function putExperimento(id_experimento: number, newExperimento: NewExperimento) {

    //console.log("putClasses()");

    try {
        const response = await fetch(
            baseApiUrl + "experimentos/" + id_experimento +
            "?nombre_experimento=" + newExperimento.nombre_experimento +
            "&descrip_experimento=" + newExperimento.descrip_experimento +
            "&foto_experimento=" + newExperimento.foto_experimento +
            "&video_experimento=" + newExperimento.video_experimento, {

            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(newClass)
        });

        if (!response.ok) {
            throw new Error('Error al actualizar el experimento');
        }

        const data = await response.json();
        alert("Experimento actualizado correctamente");
        return data;

    } catch (error) {
        //console.log("Error al obtener el la clase: ", error);
        alert("No se ha podido actualizar el experimento");
        return error;
    }
}
export async function deleteExperimentoById(idExperimento: number) {

    //console.log("deleteCuestionarioById()");

    try {
        const response = await fetch(
            baseApiUrl + "experimentos/" + idExperimento, {

            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(newClass)
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el experimento');
        }

        const data = await response.json();
        alert("Experimento eliminado correctamente");
        return data;

    } catch (error) {
        //console.log("Error al eliminar el cuestionario: ", error);
        alert("No se ha podido eliminar el cuestionario");
        return error;
    }

}

/*---------------------Preguntas Cuestionario-------------------- */

export async function getPreguntasCuestionario(idCuestionario: Number) {

    let listaPreguntasCuestionario: Question[] = [];

    try {

        let response = await fetch(baseApiUrl + 'preguntas/questionario/' + idCuestionario);

        listaPreguntasCuestionario = await response.json();

    } catch (error) {
        //console.log("Error al obtener las preguntas del cuestionario: ", error);
    }

    return listaPreguntasCuestionario;

}

/*---------------------Notas usuario clase-------------------- */

export async function getNotasUsuarioClase(idUsuario: number, idClase: number) {

    let listaNotasUsuarioClase: NotasUsuarioClase[] = [];

    try {

        let response = await fetch(baseApiUrl + 'resultados_cuestionarios/usuario/' + idUsuario + '/clase/' + idClase);

        listaNotasUsuarioClase = await response.json();

    } catch (error) {
        //console.log("Error al obtener las notas del usuario en la clase: ", error);
    }

    return listaNotasUsuarioClase;

}

export async function getNotasClase(idClase: number) {

    let listaNotasUsuarioClase: NotasUsuarioClase[] = [];

    try {

        let response = await fetch(baseApiUrl + 'resultados_cuestionarios/clase/' + idClase);

        if (response.status === 404) {
            //console.warn(`Notas no encontradas para clase ${idClase} (404)`);
            return listaNotasUsuarioClase;
        }

        listaNotasUsuarioClase = await response.json();

    } catch (error) {
        //console.log("Error al obtener las notas del usuario en la clase: ", error);
    }

    return listaNotasUsuarioClase;

}

/*---------------------Respuestas cuestionarios-------------------- */

//Crear un intento de cuestionario
export async function postResultadosCuestionarios(postResultadoCuestionario: PostResultadoCuestionario) {

    //console.log("postResultadosCuestionarios()");

    console.log(baseApiUrl + "resultados_cuestionarios/?" +
        "id_questionario=" + postResultadoCuestionario.id_questionario +
        "&id_usuarios=" + postResultadoCuestionario.id_usuarios +
        "&nota=" + postResultadoCuestionario.nota +

        "&total_correctas=" + postResultadoCuestionario.total_correctas +
        "&total_falladas=" + postResultadoCuestionario.total_falladas);

    const response = await fetch(
        baseApiUrl + "resultados_cuestionarios/?" +
        "id_questionario=" + postResultadoCuestionario.id_questionario +
        "&id_usuarios=" + postResultadoCuestionario.id_usuarios +
        "&nota=" + postResultadoCuestionario.nota +

        "&total_correctas=" + postResultadoCuestionario.total_correctas +
        "&total_falladas=" + postResultadoCuestionario.total_falladas, {

        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify(newClass)
    });

    if (!response.ok) {
        throw new Error('Error al crear intento de cuestionario');
    }

    const data = await response.json();
    return data;

}