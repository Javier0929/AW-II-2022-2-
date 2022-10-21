const path = require("path");

const express = require("express");
const cors =  require("cors");

const PUERTO = 8080;


const urlAlumno = path.join(__dirname,"./Alumno.html")
const urlNota = path.join(__dirname,"./Nota.html")
const urlAsignatura = path.join(__dirname,"./Asignatura.html")

 
const server =  express();

server.use(cors()).use(express.json())


server.get('/', functionAlumno )

server.get('/Nota', (req,res)=>{
    res.status(200).sendFile(urlNota);
    
})
server.get('/test',(req,res)=>{
    res.status(200).json({
        'message':'Problema encontrado..!!'
    })
})
server.use((req,res, next)=>{
    res.status(400).sendFile(urlNota);
})


function functionAlumno (req, res){
    res.status(200).sendFile(urlAlumno);
}


server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})
