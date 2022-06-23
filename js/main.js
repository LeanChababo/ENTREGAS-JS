let nombre = prompt("ingrese su nombre");
const interes = 1.70;
const tiempo = 1

function Hola() {
    alert("Hola" + " " + nombre + " " + "bienvenido a nuestra sucursal de prestamos Argentinos online a 1 año");
};

Hola();

function ElijaMonto() {
    let monto = prompt("elija el monto de su prestamo 1= $100000 2= $250000 3= $500000 4= $750000 5= 1000000")

    if (monto == 1) {
        alert("su monto elegido es de $100000")
        monto = 100000
    } else if (monto == 2) {
        alert("su monto elegido es de $250000")
        monto = 250000
    } else if (monto == 3) {
        alert("su monto elegido es de $500000")
        monto = 500000
    } else if (monto == 4) {
        alert("su monto elegido es de $750000")
        monto = 750000
    } else if (monto == 5) {
        alert("su monto elegido es de $1000000")
        monto = 1000000
    } else {
        alert("error, elija un numero valido");
        ElijaMonto();
    }
    return monto;


}; 



function calcularMontoDevolver() {
    monto = ElijaMonto()
    montoDevolver = (monto * interes * tiempo)
    alert("su monto a devolver en 1 año es de: $" + montoDevolver)
    
};

calcularMontoDevolver();

let opcion = prompt("Que quiere hacer? 1) Aceptar prestamo  2) Ver nuevos montos  3) Salir corriendo");

while (opcion !=="3") {
    if (opcion === "1") {
    alert("Felicidades contrato su prestamo!")
    opcion = "3"
    };
    if (opcion === "2") {
    calcularMontoDevolver();
    break;
    };
};
    
alert("Gracias por pensar en nosotros!");