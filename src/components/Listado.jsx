import React, { useContext, useEffect, useState } from "react";
import Editar from "./Editar";
import { context } from "../context/context";

const Listado = () => {
  const [editar, setEditar] = useState(0);
  const { listadoState, setListadoState, conseguirPeliculas, borrarPeli } =
    useContext(context);

  useEffect(() => {
    console.log("componente de listado de peliculas cargando!!");
    conseguirPeliculas();
  }, []);

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
