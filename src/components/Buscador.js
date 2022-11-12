import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState(""); // voy a tener una busqueda vacia
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    //Crear estado y actualizarlo, para tener esa palabra y poder actualizarla
    // relleno el estado pasandole el valor del target con cada on change o sea cada letra nueva se agrega
    setBusqueda(e.target.value);
    

    // Conseguir el listado completo de peliculas

    let pelis_encontradas = listadoState.filter(peli => {
      //condición para que una peli se guarde o no
      return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
      //si el titulo de la peli al cual le hacemos lowerCase. Incluye
    });

    if (busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    setListadoState(pelis_encontradas)//en lugar de setear

      // Voy a filtrar para buscar coincidencias

    // Comprobar si hay un resultado

      //si no hay un resultado le daré el valor que tenga del listado en localStorage
    
    
      //Si va bien actualizar estado del listado con lo que he logrado filtrar
  }

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>

      {(noEncontrado === true && busqueda.length > 2) && (
        <span className='no-encontrado'>No se ha encontrado ninguna considencia</span>
      )}
      <form>
          <input type="text" 
                id="search_field" 
                name='busqueda'
                autoComplete='off' //que no me autocomplete con nada
                value={busqueda} //va a servirme como estado, inicialmente está vacío
                onChange={buscarPeli}//detecta cada cambio que haga y cada vez que quiera interactuar con el campo
                //va a buscar una peli
                />

          <button id="search">Buscar</button>
      </form>
</div>
    
  )
}
