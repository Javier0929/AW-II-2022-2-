//Conexion 
const mongoose = require('mongoose');
const conexion = 'mongodb+srv://arauz:arauz@cluster0.6ydsrxr.mongodb.net/Notas?retryWrites=true&w=majority';    

// Conexion a la base de mongoDB Atlas



//Conexion a Data Base...
(async () => {
    const estadoConexion = await mongoose.connect(conexion)

    
     //Entidad "equipo"con su atributo

    const alumno = mongoose.model("alumno", { 
        nombre:String, 
        identificacion:String }  );
    const asignatura = mongoose.model("asignatura", { descripcion:String }  );


// Entidad "Nota"con su atributo

const nota = mongoose.model("nota", 
 { 
         idalumno: { type: mongoose.Types.ObjectId , ref:"alumno" } ,
         idasignatura: { type: mongoose.Types.ObjectId , ref:"asignatura" } ,
         calificacion:String, 
         observacion:String, 
     }  
     );

// Entidad "Alumno" con su atributo

    const alumno1 =  new alumno({
        nombre:"Javier", 
        identificacion:"1312427934"
    });
         const saveAlumno = await  alumno1.save();
         
         const asignatura1 =  new asignatura({
            descripcion:"Estudios Sociales"});
         const saveAsignatura = await asignatura1.save();

// Agregamos Nota

const nota1=  new nota(
        {
                calificacion:"8",
                observacion:"Regular",
                idasignatura: saveAsignatura._id,
                idalumno: saveAlumno._id
            }
            );
        
const saveNota = nota1.save();

const resultado =   await nota.find()
    .populate("idalumno")
    .populate("idasignatura");
    console.log(resultado);
})()
        

