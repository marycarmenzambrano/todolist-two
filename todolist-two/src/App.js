import { useState } from 'react';
import './App.css';
import { Formulario } from './componentes/Formulario';
import { Tarea } from './componentes/Tarea';



function App() {

  const [tarea, setTarea] = useState('')
  const [listadoTareas, setListadoTareas] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    if(tarea === '') {
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



  return(
    <>
     <div className='contendorPrincipal'>
          <h1>Todolist</h1>

          <div className='contenedorFormulario'>
            <Formulario
             tarea ={tarea}
             handleSubmit={handleSubmit}
             handleChange={handleChange} />
          </div>

          <div className='contenedorTareas'>
            <h2>Lista de Tareas</h2>

            <div className='contenedorInfoTareas'>
              {
                listadoTareas.map(tarea =>(
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