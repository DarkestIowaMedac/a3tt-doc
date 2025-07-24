type Programador = {
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean
    //o si puedes recibir null puedes decir tomarMate: boolean | null
}

let ingeniero: Programador;

ingeniero = {
    nombre: 'audaz',
    tecnologias: ['react', 'angular'],
}