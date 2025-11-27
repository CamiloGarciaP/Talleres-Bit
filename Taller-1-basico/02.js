//Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

let nombre =  prompt( '¿Cúal es tú nombre?' )
let añoNacimiento = prompt( nombre + '¿Cúal es tú año de nacimiento?' )

let añoActual = ( 2025 - añoNacimiento )   //Restamos el año actual con el año de nacimiento ( preguntar al profe como puedo dejarlo actualizado)

alert(` Hola ${nombre}, grandioso! Tienes ${añoActual} años. `)


