const mongoose = require('mongoose');

const connectionURL= "mongodb+srv://arauz:arauz@cluster0.6ydsrxr.mongodb.net/Registro?retryWrites=true&w=majority";

( async ()=>{

try {
    await mongoose.connect(connectionURL); // Conexion a Mongo
    
    const Alumno = mongoose.model("Alumno", { name:String } ); //Model Alumno
    const Asignatura = mongoose.model("Asignatura", { name:String } ); // Model Asignatura
    const Nota =  mongoose.model("Nota", 
        {
            calificacion: Number,
            idAlumno: { type: mongoose.Types.ObjectId , ref:"Alumno" }, // Relacion de alumno - nota
            idAsignatura: { type: mongoose.Types.ObjectId , ref:"Asignatura" }, //Relacion de asignatura - nota
        } 
    );

    // ********* Creamos Datos *********
    
    const alumno1 =  new Alumno( { name:"Jacinto" } );//SAVE ALUMNO DB
    const saveAlumno1 = await alumno1.save();

    
    const asignatura1 = new Asignatura( { name:"Matematicas" } );//SAVE ASIGNATURA DB
    const saveAsignatura1= await  asignatura1.save();

    const nota1=  new Nota(//SAVE NOTA DB
        {
            calificacion: 10,
            idAlumno: saveAlumno1._id,
            idAsignatura: saveAsignatura1._id
        }
    ); await nota1.save();
    console.log("Datos Guardados")
    

    //************ Leemos Datos*************

    /*const result = await Nota.find({}).populate('idAlumno').populate('idAsignatura')
    for(const item in result) {
        const actual = result[item];
        console.log(`\nNombre de estudiante: ${actual.idAlumno.name} -  Asignatura: ${actual.idAsignatura.name} - Nota: ${actual.calificacion}`)
    }*/

    
    //********** Eliminamos Datos **************

    //await Nota.findByIdAndDelete('6349cc32887bdea825e33d7a')
    //console.log(`Nota removed successfully`)



    //*********Actualizamos Datos **************
/*
    const body = { calificacion: 11}
    await Nota.findByIdAndUpdate('6349cabca57eff118e35fa64', body, { new: true })
    console.log(`Nota updated successfully`)*/

} catch (error) {
    console.log(error.message);       
}
})();