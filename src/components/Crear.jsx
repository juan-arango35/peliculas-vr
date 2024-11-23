import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnLocalStorage";

const Crear = ({ setListadoState }) => {
  const tituloComponente = "Añadir Película";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  }); // estado de las peliculas

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    //conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    //guardar el estado de una sola pelicula
    setPeliState(peli);

    //actualizar el estado principal agrega la pelicula al final
    setListadoState((elementos) => {
      return [...elementos, peli];
    });
    //guardar en el local storage
    GuardarEnStorage("pelis", peli);
  //limpiar el formulario
  target.reset();
  }

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {(titulo && descripcion) && "Has creado una Película " + titulo}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" placeholder="Titulo" id="titulo" name="titulo" />
        <textarea
          name="descripcion"
          id="descripcion"
          placeholder="Descripcion"
        ></textarea>
        <input type="submit" id="save" value="guardar" />
      </form>
    </div>
  );
};

export default Crear;
