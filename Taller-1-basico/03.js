//Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no. 
//Si es múltiplo debe imprimir Si, el número x es múltiplo 5, de lo contrario debe imprimir No, el número x no es múltiplo de 5.


let numero = prompt('Dime un número al azar.');

if( numero % 5 == 0 ) {         //significa igual y pregunta por el valor de la variable.
    alert( `Si, el número ${numero}, es múltiplo de 5.`);
}
else{
    alert(`No, el número ${numero}, no es múltiplo de 5.`);
}