import React, { useEffect, useState } from "react";
import Editar from "./Editar";

const Listado = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0);

  useEffect(()=>{
    console.log("componente de listado de peliculas cargando!!")
    conseguirPeliculas()
}, [])


  
const conseguirPeliculas=()=>{
    let peliculas = JSON.parse(localStorage.getItem("pelis"))
    setListadoState(peliculas); 
    return peliculas; 
}

const borrarPeli=(id)=>{
    //conseguir peliculas almacenadas
    let pelisAlmacenadas= conseguirPeliculas(); 

    //filtrar esas peliculas para q elimine el array la que no quiero; 
    let nuevoArrayPeliculas = pelisAlmacenadas.filter(peli=> peli.id !== parseInt(id)); 


    //actuaizar estado del listado
    setListadoState(nuevoArrayPeliculas); 

    //actualizar los datos en localStorage
    localStorage.setItem('pelis', JSON.stringify(nuevoArrayPeliculas))

}


  return (
    <>
      {listadoState != null ? (
        listadoState.map((item) => (
          <article key={item.id} className="peli-item">
            <h3 className="title">{item.titulo}</h3>
            <p className="description">{item.descripcion}</p>
            <button
              className="edit"
              onClick={() => {
                setEditar(item.id);
              }}
            >
              Editar
            </button>
            <button className="delete" onClick={() => borrarPeli(item.id)}>
              Borrar
            </button>
            {/* aparece e formulario de editar. */}

            {editar === item.id && (
              <Editar
                peli={item}
                conseguirPeliculas={conseguirPeliculas}
                setEditar={setEditar}
                setListadoState={setListadoState}
              />
            )}
          </article>
        ))
      ) : (
        <p>No hay Películas para mostar</p>
      )}
    </>
  );
};

export default Listado;
