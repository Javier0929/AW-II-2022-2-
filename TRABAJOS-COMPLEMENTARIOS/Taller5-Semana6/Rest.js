
const cors = require("cors");
const express  = require("express");

const app =  express();
const PUERTO =  3001;


app.use(cors()).use(express.json())
//app.use('/public', express.static(__dirname+'/public') )

let students = [];


app.get('/api/v1', (req,res)=>{
    res.status(200).send(
        students
    )
})
app.post('/api/v1', (req,res)=>{
    const {body} =  req;
    students.push(body);({
    msg:"Dato insertado correctamente",
        resp: body
    })
})

app.get('/api/v1/:identificacion', (req,res)=>{
    const {identificacion} = req.params;
    let result = students.filter(p=>p.identificacion === identificacion);
    if (result.length > 0){
        res.status(200).send(result[0]);

    }
    
    res.status(404).send({
        msg:"No se puede encontrar el dato de identificacion",
    })
})
app.put('/', (req,res)=>{
    const {identification, name, course} = req.body;
    let student =  students.filter(p=> p.identification === identification)[0] || {}
    student.name = name;
    student.course = course;

    res.status(200).send(
        {
            message:"dato modificado correctamente",
            response: student
        }
    )

})
app.delete('/:identification', (req,res)=>{
    const {identification} =  req.params;
    students = students.filter(p => p.identification !== identification);
    res.status(200).send({
        response:"Se eliminó el estudiante con éxito!"
    })
})
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})

