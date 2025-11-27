// Escribe un programa que:
// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

const lista = prompt('Dame un número');
const numeros = [];

for ( let i = 1; i <= lista; i++) {
    numeros.push (i);
}

numeros.splice(1, 1);
console.log(numeros);