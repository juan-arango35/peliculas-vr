import React, { useContext} from "react";
import { context } from "../context/context"


const Crear = ({children}) => {
  const tituloComponente = "Añadir Película";

  const {  titulo, descripcion,conseguirDatosForm } = useContext(context);

  return (
    <div className="add">
      <div>{children}</div>
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {titulo && descripcion && "Has creado una Película " + titulo}
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
