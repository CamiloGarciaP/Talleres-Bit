//Completa el siguiente programa para imprimir los números que sean mayores a 10.
const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39];

// Forma 2
const numeroNuevo = nums.filter (function (valor) {
    return valor > 10;
}).forEach( ( value ) => {
    console.log( 'filter: ', value );
});

// Forma 1
for (let i = 0; i < nums.length; i++) {
    if ( nums [ i ] > 10){
        console.log('for: ', nums[ i ]);
    }
}