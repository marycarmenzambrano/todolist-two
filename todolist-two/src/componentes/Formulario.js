export function Formulario(props) {

    const { tarea, handleSubmit, handleChange } = props

   
    const URL = "https://assets.breatheco.de/apis/fake/todos/user/mzambrano";
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify([]),
    };

    fetch(URL, config)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => console.log(data,"data"))
        .catch((error) => console.log(error));
   
   
   
   
   
   
   


















    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Escribe una Tarea"
                onChange={handleChange}
                value={tarea} />

            <input type="submit"
                className="btn"
                value="Agregar"
                onClick={handleSubmit} />

        </form>
    );
}