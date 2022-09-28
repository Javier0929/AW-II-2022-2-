//Determinamos las entidades respectivas con sus atributos
const Alumno=[
    {
        id:1,
        Nombre:"Javier",
        Indentificacion: 1312427934
    },
    {
        id:2,
        Nombre: "Ana",
        Indentificacion:1389264827
    },
    {
        id:3,
        Nombre: "Juan",
        Indentificacion:1389268362
    },
    {
        id:4,
        Nombre: "Angel",
        Indentificacion:1372681623
    },
    {
        id:5,
        Nombre: "Jacinto",
        Indentificacion:1389872677
    },
]
const Asignatura=[
    {
        id:1,
        Descripcion:"Lengua y Literatura",
        Nivel: "6to Nivel",
        Creditos: "60"
    },
    {
        id:2,
        Descripcion:"Ingles",
        Nivel: "5to Nivel",
        Creditos: "20"
    },
    {
        id:3,
        Descripcion:"Ciencias Sociales",
        Nivel: "4to Nivel",
        Creditos: "35"
    },
    {
        id:4,
        Descripcion:"Matematicas",
        Nivel: "3ro Nivel",
        Creditos: "25"
    },
    {
        id:5,
        Descripcion:"Cultura Fisica",
        Nivel: "2do Nivel",
        Creditos: "40"
    }
]
const Nota=[
    {
        id:1,
        idAlumno:1,
        idAsignatura: 1,
        Parcial: "1er Parcial",
        Nota: 10,
        Observacion: "Aprobado",
        Estado: "Regular"
    },

    {
        id:2,
        idAlumno:2,
        idAsignatura: 2,
        Parcial: "3er Parcial",
        Nota: 8,
        Observacion: "Aprobado",
        Estado: "Regular"
    },
    {
        id:3,
        idAlumno:3,
        idAsignatura: 3,
        Parcial: "2do Parcial",
        Nota: 4,
        Observacion: "Aprobado",
        Estado: "Regular"
    },

    {
        id:4,
        idAlumno:4,
        idAsignatura: 3,
        Parcial: "1er Parcial",
        Nota: 5,
        Observacion: "Aprobado",
        Estado: "Regular"
    },

    {
        id:5,
        idAlumno:1,
        idAsignatura: 3,
        Parcial: "3er Parcial",
        Nota: 7,
        Observacion: "Reprobado",
        Estado: "Regular"
    },
]
// Sentencia repetitiva del arreglo

for(const iterator of Nota) {
    auxAlum= Alumno.find(elum=> elum.id===iterator.idAlumno)
    auxAsig= Asignatura.find(asig=> asig.id===iterator.idAsignatura)
    console.log(`\n*** INGRESO DE NOTAS  ***:
    \tNombre: ${auxAlum.Nombre} Identificacion:${auxAlum.Indentificacion}
    \tAsigantura: ${auxAsig.Descripcion} - Observacion: ${iterator.Observacion}`);
}