interface Arquitecto {
    nombre:string,
    herramientas: string[],
    tomarMate: boolean | null
}

let peon: Arquitecto = {
    nombre: 'Sergio',
    herramientas: ['alicates', 'tijeras'],
    tomarMate: false
}

let disenador: Arquitecto = {
    nombre: 'Eric',
    herramientas: ['planos'],
    tomarMate: true,
}
//Si diseñador no fuese fuese Arquitecto pero tuviese los mismos o más datos entonces
//la función podría seguir usandose aunque le pasasemos algo que no fuese de tipo Arquitecto.

//Si usasemos type  pasaría lo mismo.

//Importante usar bien el tipado para evitar errores como que el backend añada atributos, etc.
function enviarCurriculum(arquitecto: Arquitecto){
    console.log('Este curriculum es de '+arquitecto.nombre)
}

enviarCurriculum(disenador)