import React, { useEffect, useState } from "react";
import Editar from "./Editar";

const Listado = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log("componente del listado de tareas cargando");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  };

  const borrarPelicula = (id) => {
    let peliculasAlmacenadas = conseguirPeliculas();

    //filtar la pelicula a borrar
    let nuevoArrayDePelis = peliculasAlmacenadas.filter(
      (peli) => peli.id !== id
    );
    console.log(
      "peliculas almacenadas:",
      peliculasAlmacenadas,
      "nuevo array de peliculas:",
      nuevoArrayDePelis
    );
    setListadoState(nuevoArrayDePelis);
    //actualizar datos enn localStorage
    localStorage.setItem("pelis", JSON.stringify(nuevoArrayDePelis));
  };

  return <>
    {listadoState !== null ? (
        listadoState.map((item)=>{
            <article key={item.id} className="peli-item">
                <h3 className="title">{item.titulo}</h3>
                <p className="description">{item.descripcion}</p>
            <button className="edit" onClick={()=>{
                setEditar(item.id);
            }}>Editar</button>
            <button className="delete" onClick={()=>borrarPelicula(item.id)}>Borrar</button>
                 {/* aparece e formulario de editar. */}
                 
                 {editar == item.id && (
                    <Editar peli={item} conseguirPeliculas={conseguirPeliculas}
                    setEditar={setEditar}
                    setListadoState={setListadoState}
                    />
                 )}
                 
            </article>
        })
    ):(<p>No hay Películas para mostar</p>)}
  </>;
};

export default Listado;
