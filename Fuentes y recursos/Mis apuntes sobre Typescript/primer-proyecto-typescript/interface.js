"use strict";
let peon = {
    nombre: 'Sergio',
    herramientas: ['alicates', 'tijeras'],
    tomarMate: false
};
let disenador = {
    nombre: 'Eric',
    herramientas: ['planos'],
    tomarMate: true,
};
//Si diseñador no fuese fuese Arquitecto pero tuviese los mismos o más datos entonces
//la función podría seguir usandose aunque le pasasemos algo que no fuese de tipo Arquitecto.
//Si usasemos type  pasaría lo mismo.
//Importante usar bien el tipado para evitar errores como que el backend añada atributos, etc.
function enviarCurriculum(arquitecto) {
    console.log('Este curriculum es de ' + arquitecto.nombre);
}
enviarCurriculum(disenador);
