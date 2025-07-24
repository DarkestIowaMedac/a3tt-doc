let estudianteJavascript: boolean;
estudianteJavascript = true;

if(estudianteJavascript){
    console.log("siga viendo")
}
else{
    console.log("Estudie javascript antes")
}

let interMiami: number = 11
let interMiami2: number | null | undefined = null; //tipo de dato personalizado
let fcDallas: number = 11
let messi: number = 1
let juegaMessi: boolean = true

let palabras: string = 'Me emocioné al verlo a Messi'

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean):void {
    let motivo = ''
    if(juegaMessi){
        equipo1 += messi
        motivo = 'por que juega Messi'
    } 
    if(equipo1>equipo2) console.log('Gana Inter Miami'+motivo)
    if(equipo1==equipo2) console.log('Empatan')
    if(equipo1<=equipo2) console.log('Gana FC Dallas')
}

jugar(interMiami, fcDallas, juegaMessi)


//interMiami.
//juegaMessi. Esto evoca solo los métodos d dicho tipo