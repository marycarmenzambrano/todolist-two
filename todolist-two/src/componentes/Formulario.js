import { baseURL } from "../App";

export function Formulario(props) {

    const { tarea, handleSubmit, handleChange } = props

        
  


    return (
        <form onSubmit={handleSubmit}
        >
            <input type="text"
                placeholder="Escribe una Tarea"
                onChange={handleChange}
                value={tarea} />

            <input type="submit"
                className="btn"
                value="Agregar"
                onClick={handleSubmit}
                
                />


        </form>
    );
}