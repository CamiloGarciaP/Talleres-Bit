//Complete el siguiente programa e imprima la cantidad de unos (1) que haya en el arreglo:
const nums = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];   //Se pueden cambiar los valores de 0 a 1 y sigue sumandolos de manera correcta

let resultado = 0 ;   //El resultado empieza en 0 porque aun no se han sumado ningún número.

for (let i of nums ){    
    if ( i == 1 ){          //Se le asigna el valor de 1 a i.
        resultado += i;     //Se le indica con el += que vaya aumentado siempre que i sea igual a 1.
    }
}
console.log(resultado);