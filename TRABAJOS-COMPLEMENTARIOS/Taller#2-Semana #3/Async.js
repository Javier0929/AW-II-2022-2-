// Exportamos los datos de los arreglos 

const {Nota, Alumno, Asignatura}= require('./datos')

//Definimos una funcion para el alumno
async function buscarALumnoId(id){
    const student = Alumno.find((nota) => {
        return nota.id === id
    })
    if(!student){
        const error = new Error();
        error.message="Estudiante no encontrado";
        throw error;
    }
    return student
}

//Definimos una funcion para asignatura
async function buscarAsignaturaId(id){
    const asigantura = Asignatura.find((asigantura) => {
        return asigantura.id === id
    })
    if(!asigantura){
        const error = new Error();
        error.message="Asignatura no encontrada";
        throw error;
    }
    return asigantura
}

//Definimos una funcion para nota
async function buscarNotaId(id){
    const nota = Nota.find((nota) => {
        return nota.id === id
    })
    if(!nota){
        const error = new Error();
        error.message="Nota no encontrada";
        throw error;
    }
    return nota
}

//Realizamos la busquedas de los arreglos definidos. cons sus respectivas entidades  
async function main (){
    try{
        const resultStudent =  await buscarALumnoId(1)
        const resultAsignature =  await buscarAsignaturaId(resultStudent.id)
        const resultNota =  await buscarNotaId(resultAsignature.id)
        resultStudent.resultAsiganture = resultAsignature
        resultAsignature.resultNota = resultNota
        console.log(resultStudent)
    }catch (err){
        console.log(err.message)
    }
}main()