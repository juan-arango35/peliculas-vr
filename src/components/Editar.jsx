import React from "react";

const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {
  const titulo_componente = "Editar Pelicula"; 
  const guardarEdicion = (e, id) => {
    e.preventDefault();
    //conseguir el target del evento
    let target = e.target;
    //Buscar el indice de pelicula a editar
    const peliculasAlmacenadas = conseguirPeliculas();
    const indice = peliculasAlmacenadas.findIndex((peli) => peli.id === id);

    //crear un objeto con el id de ese indice, con titulo y descripcion del formulario

    let peliEditada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    //actualizar el elemento con ese indice
    peliculasAlmacenadas[indice] = peliEditada;

    //guardar el nuevo array de objetos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(peliculasAlmacenadas));

    //luego actualizar el estado
    setListadoState(peliculasAlmacenadas);
    setEditar(0);
  };

  return <div className="edit_form">
    <h3 className="title">{titulo_componente}</h3>
    <form onSubmit={e => guardarEdicion(e, peli.id)}>
    <input
            type="text"
            name="titulo"
            className="titulo_editado"
            defaultValue={peli.titulo}
            />
             <textarea
            name="descripcion"
            defaultValue={peli.descripcion}
            className="descripcion_editada"
            />
            <input
            type="submit"
            className="editar"
            value="Actualizar"
            />
    </form>
  </div>;
};

export default Editar;
