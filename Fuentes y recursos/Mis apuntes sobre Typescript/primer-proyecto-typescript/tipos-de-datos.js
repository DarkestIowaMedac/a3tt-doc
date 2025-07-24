"use strict";
let estudianteJavascript;
estudianteJavascript = true;
if (estudianteJavascript) {
    console.log("siga viendo");
}
else {
    console.log("Estudie javascript antes");
}
let interMiami = 11;
let interMiami2 = null; //tipo de dato personalizado
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = 'Me emocioné al verlo a Messi';
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = 'por que juega Messi';
    }
    if (equipo1 > equipo2)
        console.log('Gana Inter Miami' + motivo);
    if (equipo1 == equipo2)
        console.log('Empatan');
    if (equipo1 <= equipo2)
        console.log('Gana FC Dallas');
}
jugar(interMiami, fcDallas, juegaMessi);
//interMiami.
//juegaMessi. Esto evoca solo los métodos d dicho tipo
