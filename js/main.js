const email = document.getElementById("Email")
const nombreCompleto = document.getElementById("nombreCompleto")
const dni = document.getElementById("dni")
const ciudad = document.getElementById("ciudad")
const municipio = document.getElementById("municipio")
const codigoPostal = document.getElementById("cp")
const direccion = document.getElementById("direccion")
const interes = 1.70;
const tiempo = 1



const boton = document.getElementById("boton-final")

const formResult = [];
const precioDevolucion = [];

boton.addEventListener("click", (event) => {
    event.preventDefault()
    const data = {
        nombreCompleto: nombreCompleto.value,
        email: email.value,
        interes: interes,
        dni: dni.value,
        municipio: municipio.value,
        ciudad: ciudad.value,
        codigoPostal: codigoPostal.value,
        direccion: direccion.value
    }
    formResult.push(data)
    precioDevolucion.push({
        interes: data.interes,
        precio: 500000
    })

})



function checkDni() {
    if ((dni.length == 0) || (dni.length < 6) || (dni.length > 9)) {
        let resultado = document.getElementById("resultado")
        resultado.innerHTML = "ingresa un dni valido";
        resultado.className = "p-2 mb-2 bg-dark text-white";
    } else {
        resultado.innerHTML = "";
        resultado.className = "";
    }  
    
}

checkDni();




function select() {
    const selectPrice = document.getElementById("valorMonto");
    const x =(selectPrice.selectedOptions[0].value);
    const valor = (x * interes * tiempo)


    const creacionElemento = document.getElementById("montoDevolucion");
    const valorDevolver = document.getElementById('valorTotal')
    valorDevolver.textContent = valor;
    creacionElemento.appendChild(valorDevolver)
}


//estoy terminando de armar la logica para que valide el formulario y que me tire el alert con una de las librerias que vimos hoy
/* function validarFormulario() {
    
} */


/* function calcularMontoDevolver() {
    
    
};

calcularMontoDevolver(); */

/*let opcion = ""

while (opcion !=="3") {
    opcion = prompt("Que quiere hacer? 1) Aceptar prestamo  2) Ver nuevos montos  3) Salir corriendo");
    if (opcion === "1") {
    alert("Felicidades contrato su prestamo!")
    opcion = "3"
    };
    if (opcion === "2") {
    calcularMontoDevolver();
    };
};
    
alert("Gracias por pensar en nosotros!"); */