import { useState } from "react";
import { context } from "./context";
import { GuardarEnStorage } from "../helpers/GuardarEnLocalStorage";

const Proveedor = ({ children }) => {
  const [listadoState, setListadoState] = useState([]);
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  }); // estado de las peliculas
  const [busqueda, setBusqueda] = useState(""); // estado para la busqueda
  const [noEncontrado, setNoEncontrado] = useState(false); //estado si no se encontro
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
  };
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
    <context.Provider
      value={{
        listadoState,
        setListadoState,
        titulo,
        descripcion,
        conseguirDatosForm,
        conseguirPeliculas,
        borrarPeli,
        busqueda, 
        setBusqueda,
        noEncontrado, 
        setNoEncontrado
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Proveedor;
