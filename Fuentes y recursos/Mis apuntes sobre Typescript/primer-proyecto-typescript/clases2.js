"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket ganador es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('loterias');
sorteo.setTicket('S7');
console.log(sorteo.sortear());
