import './style.css'
import axios from 'axios'
import { IResNota, Nota } from './interfaces/INota';
const httpAxios =  axios.create({
  baseURL:'http://localhost:8000',
})



const app = document.querySelector<HTMLDivElement>('#app')!
//#region mapa de elementos
const etiqueta = document.createElement("label")
etiqueta.textContent="ID"
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `

<label for ="parcial">parcial</label><input id="parcial"/>
<label for ="nota">nota</label><input id="nota"/>
<label for ="observacion">observacion</label><input id="observacion"/>
<label for ="estado">estado</label><input id="estado"/>
<button id="new" >New</button>
<button id="save" >Save</button>
<button id="query" >Query</button>
<div id="body"/>
`
const newb = document.querySelector<HTMLButtonElement>('#new')!
const save = document.querySelector<HTMLButtonElement>('#save')!
const query = document.querySelector<HTMLButtonElement>('#query')!

const id = document.querySelector<HTMLInputElement>('#id')!


const parcial = document.querySelector<HTMLInputElement>('#parcial')!
const status = document.querySelector<HTMLInputElement>('#status')!
const nota = document.querySelector<HTMLInputElement>('#nota')!
const observacion = document.querySelector<HTMLInputElement>('#observacion')!
const estado = document.querySelector<HTMLInputElement>('#estado')!
const stock = document.querySelector<HTMLInputElement>('#stock')!
const body = document.querySelector<HTMLDivElement>('#body')!
//#endregion


newb.addEventListener('click',()=>{
  parcial.value=""
  nota.value=""
  observacion.value=""
  estado.value=""
  id.value=""
})
query.addEventListener('click', async ()=>{
  const respNotas:IResNota 
  =  await (await httpAxios.get<IResNota>('nota')).data;

    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"


    const { notas } = respNotas;
    console.log(respNotas)

    for (const product of notas)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${product._id}" >${product.parcial}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${product.nota}`
    }
    body.innerHTML=``
    body.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const Nota:Nota 
          =  await (await httpAxios.get<Nota>(`nota/${idx}`)).data;
          parcial.value= Nota.parcial;          
          nota.value= Nota.nota;  
          observacion.value= Nota.observacion;  
          estado.value= Nota.estado;  
          id.value= Nota._id!;  
           
      })
    })

  

    

  

})
save.addEventListener('click',async ()=>{
  const data:Nota = {
    parcial:parcial.value,
    nota:  nota.value,
    observacion:observacion.value,
    estado:estado.value,
  }
  // console.log(data);

  if (id.value.trim().length>0 )
  {
    //        
    const resp: Nota = await (await httpAxios.put<Nota>(`nota/${id.value}`, data)).data
    console.log(resp)
    console.log(`El prducto ${resp.parcial} fue modificado con éxito`);
    
    return;
  }
  try {
    const resp: Nota =  await (await httpAxios.post<Nota>(`nota`, data)).data
    console.log(`El Nota ${resp.parcial} fue grabado con éxito`);
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
      
    }
    
  }
  
  
})