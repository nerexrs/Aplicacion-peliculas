import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {
    
    // const [listadoState, setListadoState] = useState([])
    //voy a rellenar el estado con el metodo conseguirPeliculas

    
    const [editar, setEditar] = useState(0)
        
    const conseguirPeliculas = () => {
      let peliculas = JSON.parse(localStorage.getItem("pelis"));

      setListadoState(peliculas);
      //le paso todas las peliculas que acabo de sacar del local storage
      
      return peliculas;
  }


    useEffect(() => {
        console.log("Componentes del listado de peliculas  cargado!!");
        conseguirPeliculas();

      }, []);

    //para que esto pase usaremos un use effect

    const borrarPeli = (id) => {
      // conseguir peliculas almacenadas
      let pelis_almacenadas = conseguirPeliculas();

      // Filtrar esas peliculas para que elimine del array lo que no quiero

      let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
      //aquí me que queddo con todas las pelis cuyo id sean distintos al id que quiero eliminar al darle click a borrar 


      // Actualizar estado del listado, le pongo al listado el nuevo array
      setListadoState(nuevo_array_pelis);


      // Actualizar los datos en el LocalStorage

      localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
    }

  return (
    <>
        {
                listadoState.map(peli => {
                        return (
                            <article key={peli.id} className="peli-item">
                                <h3 className="title">{peli.titulo}</h3>
                                <p className="description">{peli.descripcion}</p>

                                <button className="edit" onClick={ () => setEditar(peli.id) }>Editar</button>
                                <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

                                {/* Aparece formulario de editar */}

                                {editar === peli.id && (
                                  <Editar peli={peli} 
                                  conseguirPeliculas={conseguirPeliculas}
                                  setEditar={setEditar}
                                  setListadoState={setListadoState}/>
                                )}
                                
                                {/* Voy a pasar como prop la funcion */}

                                {/* voy a hacer un estado que me pueda hacer un identificador y si se cumple una condición que salga un formulario */}
                        </article>
                        );
                })
    }
            {/* Quiero que haya un grafment vacio y quiero que sea dinamico */}
        {/* map va a recorrer  cada index y conforme al lemngt de los objetos que
        tengo dentro de mi array listadoState que es el de pelis que se vuelve peliculas
        y que después peliculas se guarda en el hook useState mediante listadoState  */}
            

            {/* falta la key, que cada elemento tenga una key que ser[ia el id*/}
    </>
  )
}
