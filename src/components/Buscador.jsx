import React, { useContext, useState } from "react";
import { context } from "../context/context";

const Buscador = ({ children }) => {
  const { listadoState, setListadoState,busqueda, 
    setBusqueda,
    noEncontrado, 
    setNoEncontrado } = useContext(context);

  //funcion para buscar peli
  const buscarPelicula = (e) => {
    //crear estado para actualizarlo
    // el listado completo de las peliculas : esto ya esta en las props
    setBusqueda(e.target.value);

    //filtrar para encontrar coincidencias

    let pelisEncontradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    //comprobar si hay un resultado:
    if (busqueda.length <= 1 || pelisEncontradas.length <= 0) {
      //si no encontro nada o la busqueda tiene pocos carateres restaura el listado completo
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }
    //actualiza el listado principal con lo que se logro filtar
    setListadoState(pelisEncontradas);
  };
  return (
    <div className="search">
      <div>{children}</div>
      <h3 className="title"> Buscardor : {busqueda}</h3>
      {noEncontrado === true && busqueda.length > 1 && (
        <span>No se encontraron resultados</span>
      )}

      <form>
        <input
          type="text"
          id="search_filed"
          name="busqueda"
          autoComplete="off"
          onChange={buscarPelicula}
        />
      </form>
    </div>
  );
};

export default Buscador;
