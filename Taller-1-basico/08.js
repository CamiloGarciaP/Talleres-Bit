// Crea un programa a partir de las siguientes instrucciones:

// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.
// Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana" ];
let nombre = prompt('Dime tú nombre.');
let nuevoNombre = prompt('Ingresa otro nombre.');

nombres.push(nombre);        //Agrega el nombre a la lista.

//splice cambia el contenido del Array, eliminando o agregando nuevos elemento (Posicion del index, elemento para eliminar, nuevo elemneto)
nombres.splice( 2,0, nuevoNombre ); 

for( let nombre of nombres){
    console.log( nombre );
}