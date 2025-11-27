//Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces: "la frase"

let frase = prompt('Escribe una frase');
let numero = prompt( 'Dame el número de veces que se repetirá' );

for (let i = numero; i > 0 ; i--){
    console.log(frase);             //Entiendo como hacerlo pero me quedan dudas de por que no me imprime la cantidad que pido.
}


