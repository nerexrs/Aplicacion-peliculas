import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";


function App() {

    let [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
    {/*Cabecera no tocar, estetico*/}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        
        <h1>MisPelis</h1>
    </header>

    {/*Barra de navegación no tocar, estetico*/}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>

    {/*Contenido principal*/}
    <section id="content" className="content">

        {/*aqui vel listado de peliculas, si se va a tocar esto*/}
        <Listado listadoState={listadoState} setListadoState={setListadoState}/>


        {/* Así yo estoy cargando un componente del listado */}

    </section>

    {/*Barra lateral*/}
    <aside className="lateral">

      <Buscador listadoState={listadoState} setListadoState={setListadoState}/>


      <Crear setListadoState={setListadoState}/>

      {/* Lo que me hace falta para actualizar automaticamente el listado */}

    </aside>

    {/*Pie de página*/}
    <footer className="footer">
        &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
    </footer>

</div>
  );
}

export default App;
