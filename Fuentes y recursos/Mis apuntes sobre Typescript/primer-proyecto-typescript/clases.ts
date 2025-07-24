//Nota como que Typescript te pide inicializar los valores a toda costa o en su defecto usar '?'
//entonces el valor pasaría a ser undefined.
//También se pueden dar valores por defecto como [], '', 0 o false.
class Pelicula{
    nombre: string = 'Bettlejuice'; // con punto y coma al final de cada sentencia opcional
    protagonistas? : string[];
    actores?: string[];

    constructor(nombre: string,  protagonistas : string[], actores: string[]){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }

    proyectarEnCine(){
        console.log(`${this.nombre} está siendo proyectada`)
    }
}

const pelicula = new Pelicula('SpiderMan', ['Jenifer Lopez', 'Anderson mapberry'], ['suputamadre'])

pelicula.proyectarEnCine()
console.log(pelicula)

//Diferencias importantes. El tipado al comienzo de la clase y el constructor va con la palabra clave constructor