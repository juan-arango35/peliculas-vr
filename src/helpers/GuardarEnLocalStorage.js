export const GuardarEnLocalStorage = (clave, nuevoElementos) => {
  //conseguir los elementos qu tenemos en localstorage
  let elementos = JSON.parse(localStorage.getItem(clave)) || [];
  console.log(elementos, "pelicula traidas de localstorage");

  //comporbar si es un array

  if (Array.isArray(elementos)) {
    //añadir dentro del array un elemento nuevo
    elementos.push(nuevoElementos);
  } else {
    //crear un array con la nueva pelicula
    elementos = [nuevoElementos];
  }
  localStorage.setItem(clave, JSON.stringify(elementos));

  return elementos;
};
