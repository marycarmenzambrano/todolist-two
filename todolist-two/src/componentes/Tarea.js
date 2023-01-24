import { useState } from "react";

export function Tarea(props) {
  
  const { tarea, onBorrarTarea} = props
  const [editando] = useState(false)
  


  function ModoEdicionActivado() {

    return (
      <>
        <button className="btn btnBorrar"
        onClick={() => onBorrarTarea(tarea.id)}>
        Borrar</button>
      </>
    );
  }

  function ModoEdicionDesactivado() {
    return (
      <>
        <span>{tarea.tarea}</span>

        <button className="btn btnBorrar"
        onClick={() => onBorrarTarea(tarea.id)}>
        Borrar</button>
      </>
    );
  }

  return (
    <>
      <div className="contenedorTarea" id={tarea.id}>
        {
            editando 
            ? <ModoEdicionActivado/>
            : <ModoEdicionDesactivado/>
        }
      </div>
    </>
  );
}
