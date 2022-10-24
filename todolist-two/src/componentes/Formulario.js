import { baseURL } from "../App";

export function Formulario(props) {

    const { tarea, handleSubmit, handleChange } = props

        
  
    const config = {
        method: "GET",
        Headers: {
            "Content-Type": "application/json"
        },

    };

     fetch(baseURL, config)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        //.then((data) => console.log(data))
        .catch((error) => console.log(error));



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
                //onClick={handleSubmit}
                
                />


        </form>
    );
}