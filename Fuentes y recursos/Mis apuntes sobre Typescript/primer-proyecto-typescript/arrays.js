"use strict";
let arreglo = [1, 2, 3, 4, 5]; //infiere que el array es de números
let arreglo2 = ['HTML', 'CSS', 'JS']; //infiere que es de strings
//Para poner tipados:
let arreglotipado = [1, 2, 3, 4, 5, 6];
let arreglo2tipado = ['HTML', 'CSS', 'JS'];
arreglo2tipado[0].indexOf('HTML'); //al ubicar el punto se muestran los métodos.
//Si queremos ubicar tipos diferentes en un mismo array podemos usar any
let arregloany = [1, 'Ricardo', 3, 4, 5, 6];
//Sin embargo, el any es mejor evitarlo. En su lugar es mejor usar tipado personalizado que acepte number y string.
