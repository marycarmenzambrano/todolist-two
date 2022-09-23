import { useState } from "react";

export function Tarea(props) {
  const { tarea} = props;

  const [editando, setEditando] = useState(false);

  function ModoEdicionActivado() {
    const [valor, setValor] = useState(tarea.tarea);

    function handleChange (e) {
        const text = e.target.value
        setValor(text)
    }

    function handleClick(e){
        e.preventDefault()
    }

    return (
      <>
        <input type="text" onChange={handleChange} value={valor}></input>

        <button className="btn" onClick={handleClick}>Guardar</button>

        <button className="btn btnBorrar">Borrar</button>
      </>
    );
  }

  function ModoEdicionDesactivado() {
    return (
      <>
        <span>{tarea.tarea}</span>

        <button className="btn btnBorrar">Borrar</button>
      </>
    );
  }

  return (
    <>
      <div className="contenedorTarea" id={tarea.id}>
        {
            editando ? <ModoEdicionActivado/>
            : <ModoEdicionDesactivado/>
        }
      </div>
    </>
  );
}
