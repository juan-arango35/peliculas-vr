import React, { useState } from "react";
import { GuardarEnLocalStorage } from "../helpers/GuardarEnLocalStorage";

const Crear = ({ setListadoState }) => {
  const tituloComponente = "Añadir Película";
  const [titulo, setTitulo] = useState(""); //estado del titulo
  const [descripcion, setDescripcion] = useState(""); // estado de la descripcion
  const [peliState, setPeliState] = useState({});

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    let peli = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    setPeliState(peli);
   
   setListadoState((elementos)=>{
    console.log(elementos, "elementos");
    const nuevoListado=  Array.isArray(elementos) ? [...elementos, peli] : [peli];
    GuardarEnLocalStorage("pelis", nuevoListado);
    return nuevoListado
   });
   //Mostar en consola
   console.log(peliState, "estado de la pelicula nombre y descripcion");
   
   
 

  };


  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {(titulo && descripcion) && "Has creado una Película " + titulo}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input
          type="text"
          placeholder="Titulo"
          value={titulo}
          id="titulo"
          name="titulo"
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          name="descripcion"
          id="descripcion"
          placeholder="Descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        <input type="submit" id="save" value="guardar" />
      </form>
    </div>
  );
};

export default Crear;
