import { useState } from "react";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/* cabezera del sitio */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis Pelis</h1>
      </header>
      {/* barra de navegacion */}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#"> Inicio </a>
          </li>
          <li>
            <a href="/#"> Peliculas </a>
          </li>
          <li>
            <a href="/#"> Blog</a>
          </li>
          <li>
            <a href="/#"> Contactos</a>
          </li>
        </ul>
      </nav>
      {/* contenido principal */}
      <section className="content">
        {/* aqui van las peliculas */}
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>

      {/* barra lateral */}
      <aside className="lateral">
        <Buscador
          listadoState={listadoState}
          setListadoState={setListadoState}
        />

        <Crear setListadoState={setListadoState} />
      </aside>
      {/* pie de pagina. */}
      <footer className="footer">
        &copy; Master en Javascript ES12 y TypeScript
      </footer>
    </div>
  );
}

export default App;
