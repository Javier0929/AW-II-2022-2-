//Creamos el puerto

const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  3001;


app.use(cors()).use(express.json())

//app.use('/public', express.static(__dirname+'/public') )

let alumno = [];

//Get

app.get('/api/v1', (req,res)=>{
    res.status(200).send(
        alumno
    )
})

//Creacion del Post
app.post('/api/v1', (req,res)=>{
    const {body} =  req;
    alumno.push(body);
    res.status(200).send
    ({

    msg:"Dato insertado correctamente",
        resp: body
    })
})

//Creacion del Get

app.get('/api/v1/:identificacion', (req,res)=>{
    const {identificacion} = req.params;
    let result = alumno.filter(p=>p.identificacion === identificacion);
    if (result.length > 0){
        res.status(200).send(result[0]);

    }
    
    res.status(404).send({
        msg:"No se puede encontrar el elemento con esa identificacion",
    })
})

//Creacion del Put

app.put('/api/v1', (req,res)=>{
    const {identificacion, nombre, curso} = req.body;
    let alumno =  alumno.filter(p=> p.identificacion === identificacion)[0]
    alumno.nombre = nombre;
    alumno.curso = curso;

    res.status(200).send(
        {
            msg:"Dato modificado correctamente",
            response: alumno
        }
    )

})

//Creacion del Delete

app.delete('/api/v1/:identificacion', (req,res)=>{
    const {identificacion} =  req.params;
    alumno = alumno.filter(p => p.identificacion !== identificacion);
    res.status(200).send({
        msg:"Se eliminó el alumno con éxito!"
    })
})

//Salida del puerto

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo correctamente, acceda a http://localhost:${PUERTO}`)
})

