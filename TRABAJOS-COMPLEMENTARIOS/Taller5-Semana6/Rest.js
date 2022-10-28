//Creamos el puerto

const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  5000;


app.use(cors()).use(express.json())

app.use('/public', express.static(__dirname+'/public') )

let nota = [];

//Get

app.get('/', (req,res)=>{
    res.status(200).send(
        nota
    )
})

//Creacion del Post
app.post('/', (req,res)=>{
    const {body} =  req;
    nota.push(body);
    res.status(200).send
    ({

    msg:"Nota insertada correctamente",
        resp: body
    })
})

//Creacion del Get

app.get('/:identificacion', (req,res)=>{
    const {identificacion} = req.params;
    let result = nota.filter(p=>p.identificacion === identificacion);
    if (result.length > 0){
        res.status(200).send(result[0]);

    }
    
    res.status(404).send({ 
        msg:"No se puede encontrar la nota",
    })
})

//Creacion del Put

app.put('/', (req,res)=>{
    const {identification, calificacion, parcial, observacion, estado } = req.body;
    let nota =  nota.filter(p=> p.identification === identification)[0]
    
    nota.parcial = parcial;
    nota.observacion = observacion;
    nota.estado = estado; 
    nota.calificacion = calificacion;

    res.status(200).send(
        {
            msg:"Nota modificada correctamente",
            response: nota
        }
    )

})

//Creacion del Delete

app.delete('/:identificacion', (req,res)=>{
    const {identificacion} =  req.params;
    nota = nota.filter(p => p.identificacion !== identificacion);
    res.status(200).send({
        msg:"Se eliminó la nota con éxito!"
    })
})

//Salida del puerto

app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo correctamente, acceda a http://localhost:${PUERTO}`)
})

