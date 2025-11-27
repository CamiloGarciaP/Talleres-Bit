//Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

let numero1 =Number( prompt( 'Dame el primer número' ) ) ;
let numero2 =Number( prompt( 'Dame el segundo número' ) ) ;

if ( numero1 > numero2){
    for ( let i = numero1; i >= numero2; i--){      //Si el #1 es mayor que el #2, lo haga decreciendo(disminuyendo) 
        console.log(i);
    }
}
else {
    for ( let i = numero1; i <= numero2; i++);      //Si el #1 es menor que el #2, lo haga aumentando
    console.log(i);     
}