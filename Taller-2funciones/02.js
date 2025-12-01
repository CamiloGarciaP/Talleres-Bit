//Juego: Adivina el Número mágico
function adivinar() {
    const numeroAleatorio = Math.floor( Math.random() * 10 ) + 1;    // Aleatorio de 1 a 10;

        for(let i = 0; i <= 4; i++){
        console.log(`Tines ${5-i} intentos`)
        let numeroNuevo = parseInt(prompt( `Digite un número de 1 a 10:`));

        if (numeroNuevo < numeroAleatorio){
            alert(`Intenta un número mas alto`);
        }
        else  if (numeroNuevo > numeroAleatorio){
            alert(`Intenta un número mas bajo`);
        }
        else  if (numeroNuevo == numeroAleatorio){
            alert(`Adivinaste!!! El número era ${numeroAleatorio}`);
        }
        else{
            alert(`Mejor suerte la proxima...`)
        }
    }
}

adivinar()