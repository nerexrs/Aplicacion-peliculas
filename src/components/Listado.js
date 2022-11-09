import React, { useEffect } from 'react'

export const Listado = ({listadoState, setListadoState}) => {
    
    // const [listadoState, setListadoState] = useState([])
    //voy a rellenar el estado con el metodo conseguirPeliculas

    useEffect(() => {
        console.log("Componentes del listado de peliculas  cargado!!");
        conseguirPeliculas();

      }, []);
    
    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);
        //le paso todas las peliculas que acabo de sacar del local storage
        
    }

    //para que esto pase usaremos un use effect


  return (
    <>
        {listadoState != null ?
                listadoState.map(peli => {
                        return (
                            <article key={peli.id} className="peli-item">
                                <h3 className="title">{peli.titulo}</h3>
                                <p className="description">{peli.descripcion}</p>

                                <button className="edit">Editar</button>
                                <button className="delete">Borrar</button>
                        </article>
                        );
                })
            : <h2>No hay peliculas para mostrar</h2>    
    }
            {/* Quiero que haya un grafment vacio y quiero que sea dinamico */}
        {/* map va a recorrer  cada index y conforme al lemngt de los objetos que
        tengo dentro de mi array listadoState que es el de pelis que se vuelve peliculas
        y que después peliculas se guarda en el hook useState mediante listadoState  */}
            

            {/* falta la key, que cada elemento tenga una key que ser[ia el id*/}
    </>
  )
}
