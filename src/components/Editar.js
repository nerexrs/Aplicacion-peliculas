import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = "Editar pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();
        
        // Conseguir el target del evento para conseguir los valores que ingrese el usuario
        // Y poder usarlo como variable
        let target = e.target //aquí estoy accediendo a todo el form
        //Busco el indice del objeto de la pelicula a actualizar
        //Es decir buscar el objeto con el id que le pasé dentro del localStorage
        const pelis_almacenadas = conseguirPeliculas();
        
        //consigo especificamente una peli por su id
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);
    
        // Crear objeto con ese indice
        // Me creo un nuevo objeto con ese id de ese indice
        // Como propiedades le paso el id,titulo y descripcion del formulario
        let peli_actualiza = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        } 

        //para que surta efecto actualizo el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualiza

        // Guardar el neuvo array de objetos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        // Actualizar los estados como de editar.
        
        setListadoState(pelis_almacenadas);
        //Con el de arriba le paso al estado del listado mis pelis almacenadas para
        //que así cuando cierre y abra la pantalla me muestre mis pelis


        setEditar(0);

        //Con el de arriba haré que al darle actualizar se cierre el formulario
        // Antes tenía como valor el peli.id
    
    }
  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type="text"
            name='titulo'
            className='titulo_editado'
            defaultValue={peli.titulo} />
            
            <textarea name='descripcion'
            className='descripcion_editada'
            defaultValue={peli.descripcion} />

            <input type="submit" className='editar' value="Actualizar" />
        </form>

    </div>
  )
}
