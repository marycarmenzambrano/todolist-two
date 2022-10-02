import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Formulario } from './componentes/Formulario';
import { Tarea } from './componentes/Tarea';



function App() {

  const [tarea, setTarea] = useState('')
  const [listadoTareas, setListadoTareas] = useState([])


  const url = "https://assets.breatheco.de/apis/fake/todos/user/mzambrano";
  const config = { 
    method: "GET",
    Headers: {
      "Content-Type": "application/json"
    },

  };

  fetch(url, config)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(data => console.log(data))
  .catch((error) => console.log(error));


 
  
    
  

 









  function handleSubmit(e) {
    e.preventDefault()

    if (tarea === '') {
      alert('Debes escribir una tarea')
      return
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false
    }

    const temp = [nuevaTarea, ...listadoTareas]
    setListadoTareas(temp)

    setTarea('')
  }

  function handleChange(e) {
    setTarea(e.target.value)
  }

  function onBorrarTarea(id) {
    const temp = listadoTareas.filter(item => item.id !== id)
    setListadoTareas(temp)
  }



  return (
    <>
      <div className='contendorPrincipal'>
        <h1>Todolist</h1>

        <div className='contenedorFormulario'>
          <Formulario
            tarea={tarea}
            handleSubmit={handleSubmit}
            handleChange={handleChange} />
        </div>

        <div className='contenedorTareas'>
          <h2>Lista de Tareas</h2>

          <div className='contenedorInfoTareas'>
            {
              listadoTareas.map(tarea => (
                <Tarea
                  key={tarea.id}
                  id={tarea.id}
                  tarea={tarea}
                  onBorrarTarea={onBorrarTarea}
                />
              ))
            }

          </div>

        </div>
      </div>
    </>
  );
}

export default App; 