const { response, json, request } = require('express');
const Nota = require('../models/nota');



const getNotas = async (req, res= response)=>{
        const notas =await  Nota.find();
        return res.json({notas})
}


const getNota = async (req=request, res= response)=>{
    const {id} = req.params
    const nota =  await Nota.findById(id)
    res.json(nota);
}

const createNota = async(req=request,res=response)=>{
    const {parcial, nota,  observacion, estado } =  req.body;
    
    const notasave = new Nota({ parcial, nota,  observacion, estado})

    await notasave.save()
  
    res.status(201).json(notasave);
}
const updateNota = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedNota =  await Nota.findByIdAndUpdate(id,data )
    res.json(updatedNota);
}
const deleteNota =  async (req, res= response)=>{
    const {id} = req.params;
    await Nota.findByIdAndDelete(id)
    res.json(`Se ha eliminado el documento nota`);
}

 module.exports ={
    getNotas, 
    getNota,
    createNota,
    updateNota,
    deleteNota
 }