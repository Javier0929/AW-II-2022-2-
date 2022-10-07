
// Exportamos los datos de los arreglos 
const {Nota, Alumno, Asignatura}= require('./datos')

//Definimos una funcion para el alumno
function buscarALumnoId(id){
    return new Promise((res, rej) => {
        const student = Alumno.find((student) => student.id === id)
        if(!student){
            const error= new Error();
            error.message="Estudiante no encontrado";
            rej(error);
        }
        res(student)
    })
}

//Definimos una funcion para asignatura
function buscarAsignaturaId(student){
    return new Promise((res, rej) => {
        const asignature = Asignatura.find((asignature) =>{
            return asignature.id === student.idAsignatura
        })
        if(!asignature){
            const error= new Error();
            error.message="Asignatura no encontrada";
            rej(error);
        }
        student.asignature = asignature;
        res(student)
    })
}

//Definimos una funcion para nota
function buscarNotaId(id){
    return new Promise((res, rej) => {
        const note = Nota.find((note) => {
            return note.id === id
        })
        if(!note){
            const error= new Error();
            error.message="Nota no encontrada";
            rej(error);
        }
        res(note)
    })
}

//Realizamos la busquedas de los arreglos definidos. cons sus respectivas entidades  
let aux = {}
buscarNotaId(1).then((note) => {
    aux = note
    return buscarALumnoId(note.idAlumno)
}).then((alumno) => {
    aux.alumno = alumno
    delete aux.idAlumno
    return buscarAsignaturaId(alumno);
}).then((alumno) => {
    aux.alumno = alumno
    console.log(aux)
}).catch((error) => {
    console.log(error.message)
})