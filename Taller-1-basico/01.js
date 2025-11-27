//Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.
let numero1 = Number( prompt( 'Ingresa un número' ));
let numero2 = Number ( prompt( 'Ingresa otro número' ));

if (!Number.isNaN(numero1) && !Number.isNaN(numero2)){                //Al usar !isNaN queremos validar que solo se usen números. 
    alert('La suma es: ' + (numero1 + numero2));
}
else {
    alert( 'ERROR: Has digitado un valor no valido.' );
}