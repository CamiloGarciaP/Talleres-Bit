//Organizador de Biblioteca Personal: A partir del siguiente objeto debes resolver la capacidad que tiene el método agregarLibro(), para agregar nuevos libros a la biblioteca de libros.
const biblioteca = {
    libros: [
        { titulo: 'Eloquent JavaScript', autor: 'Marijn Haverbeke', leido: true },
        { titulo: 'You Do not kwon JS: Async & Performance', autor: 'Kyle Simpson', leido: false },
        { titulo: 'Aprendiendo JavaScript: desde cero hasta ECMAScript 6', autor: 'Carlos Azaustre', leido: false },
        { titulo: 'JavaScript The Good Parts', autor: 'Douglas Crockford', leido: true },
        { titulo: 'JavaScript Design Patterns', autor: 'Addy Osmani', leido: true },
    ],

    agregarLibro: function ( titulo, autor, leido ) {
        this.libros.push({
            titulo: titulo,
            autor: autor,
            leido: leido
        });
    },

    listarLibrosPendientes: function() {
        console.log('libros pendientes');
        this.libros
        .filter( libro => !libro.leido)         //Los libros que aun no se han leido.
        .forEach(libro => {
            console.log(`-${libro.titulo}`);
        });
    },

    estadisticas: function() {
        const total = this.libros.length;
        const leidos = this.libros.filter(i => i.leido).length;
        const noLeidos = total - leidos;

        const porcentajeLeidos = total === 0 ? 0 : ( leidos / total ) * 100;
        const porcentajeNoLeidos = total === 0 ? 0 : ( noLeidos / total ) * 100;

        console.log('Estadisticas');
        console.log(` - Leidos ${porcentajeLeidos.toFixed(0)}% `);
        console.log(`- No leídos: ${porcentajeNoLeidos.toFixed(0)}%`);

        return {
            leidos: porcentajeLeidos,
            noLeidos: porcentajeNoLeidos
        };
    }
}