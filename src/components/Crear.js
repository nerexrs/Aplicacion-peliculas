import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({setListadoState}) => {
    // const tituloComponente = "Añadir pelicula";
    // yo puedo crear variables de texto y llamarlas
    // en mi jsx o puedo devolver texto a fomra de variable

    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: ""
    });

    const {titulo, descripcion} = peliState;
 
    const conseguirDatosForm = e => {
        e.preventDefault();

        //conseguir datos del formulario

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        
        //quiero guardar la información de la pelicula a guardar 
        //en un objeto, guardar el value de lo anterior en un objeto

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        //desestructuro un array

        //Guardar estado
        setPeliState(peli);


        // Actualizar el estado del listado principal

        setListadoState(elementos => {
            return [...elementos, peli];
        });

        // ..elementos . Esto lo que hace es una réplica, una copia de todos los elementos, que ya haya más el nuevo elemento,

        //más el nuevo elemento que sería la peli. {...elementos, peli} 

        //uso una funcióm de callback


        //Guradar en el almacenamiento local
        //Debo cambiar mi objeto a string porque localStorage solo recibe numeros y strings
        //Entonces póngo el JSON.stringify
        GuardarEnStorage("pelis", peli); //puede demorarse entonces ponerlo de ultimo


        //aquí con copia datos reutilizo la función pero ahora creo un array con otra clave
        //es un metodo completamente generico para gaurdar un arrray de objetos con una clave que yo le diga


        //entonces me abstraigo de la función y ahgo el guardar en storage con el array con key 
        //pelis y guardo los objetos peli que cree y hago toda la función
        // me abstraigo para que sea reutilizable




    
    }

   



    return (
        <div className="add">
            <h3 className="title">{titulo}</h3>

            <strong>
            {(titulo && descripcion) && "Has creado la pelicula: " + peliState.titulo}
            </strong>
            
            <form onSubmit={conseguirDatosForm}>
                <input 
                    type="text" 
                    id="titulo"
                    name="titulo" 
                    placeholder="Titulo" />
                <textarea 
                    id="descripcion"
                    name="descripcion" 
                    placeholder="Descripción"></textarea>
                <input 
                    type="submit" 
                    id="save" 
                    value="Guardar" />
            </form>
        </div>
    );
};
