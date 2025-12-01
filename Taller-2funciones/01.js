// 4. Invertir un array: ○ Función invertirArray(array) que retorne un nuevo array invertido. ○ Ejemplo: invertirArray(["a", "b", "c"]) → ["c", "b", "a"]

function invertirArray (array){
    let arrayInvertido = [];
    console.log(array);

    for ( let i = array.length - 1; i >=0 ; i--){
        arrayInvertido = [ ...arrayInvertido, array[ i ] ]; //... Se utilizan para realizar copias superficiales de objetos 
    }
    return arrayInvertido;
}

const letras = [ "a", "b", "c", "d", "e", "f" ];
resultado = invertirArray ( letras );
console.log(resultado);