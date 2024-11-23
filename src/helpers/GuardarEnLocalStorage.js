export const GuardarEnStorage=(clave, elemento)=>{
  //conseguir o elelementos que ya tenemos en el ,localStorage.
  let elementos = JSON.parse(localStorage.getItem(clave)); 
 

  //comprobar si es un array}
  if(Array.isArray(elementos)){
    //Añadir dentro array un elemento nuevo; 
    elementos.push(elemento)
  } else {
    //crear un array con la nueva pelicula.
    elementos=[elemento]; 
  }

  //guardar en el local storage;
   localStorage.setItem(clave, JSON.stringify(elementos))

  //devolver un objeto.
  return elemento;
}