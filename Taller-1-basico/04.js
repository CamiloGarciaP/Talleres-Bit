/* Escribe un programa que le pida al usuario ingresar un número.
Si el número es múltiplo de 3 debe imprimir en la consola bing.
Si el número es múltiplo de 5 debe imprimir en la consola bong.
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.
*/

let numero = prompt( 'Ingresa un numero.' );            //Preguntar al profe, porqué la respuesta es correcta aún así me da el mensaje final.

if (numero % 3 == 0){
    alert ('Bing')
}
// else {
//     alert(numero)
// }

if (numero % 5 == 0){
    alert ('Bong')
}
// else {
//     alert(numero)
// }

if (numero % 3, 5 == 0){
    alert ('BingBong')
}
else {
    alert(`Escoge otro número diferente a : ${numero}.`)
}
