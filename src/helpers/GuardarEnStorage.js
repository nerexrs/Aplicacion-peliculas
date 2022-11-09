

//metodo generico para guardar información en el local storage

export const GuardarEnStorage = (clave, elemento) => {

    //Como parametro le pongo primero la clave o el identificador y después el elemento que quiero guardar

        // vamos a conseguir los elementos que ya tenemos en el local storage, 
        let elementos = JSON.parse(localStorage.getItem(clave))
        
        console.log(elementos);
        //un console.log para ver lo que originalmente agrego a elementos 
        //cada vez que agrego un archivo nuevo
        
        
        // comprobar si es un array o crearme desde cero el array 

        if (Array.isArray(elementos)) {
            // Añadir dentro del array un elemento nuevo
            elementos.push(elemento);
        }else {
            //crear un array con la nueva peli
            
            elementos = [elemento]
            //Si no es un array entonces voy a hacer una variable
            // Que voy a sobre escribir y le voy a añadir como valor la peli 
            // la peli que agrego sería la primera peli
        }
        
        // Debo Guardar en el local storage para que funcione
        localStorage.setItem(clave, JSON.stringify(elementos))

        //Convierto mi array de objetos de elementos a un json string
        // Y los puedo guardar dentro de la key de pelis y hago esto con setItems


        //el primero parametro de setItems es la key del objeto 
        // o sea como la clase del objeto 

        //devolver objeto guardado, retorno la pelicula

        return elemento;

        //para saber qué objeto acabo de guardar
        // lo podemos reutlizr en cualquier parte
        // es un metodo que rd uds
        
    }

