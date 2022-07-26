/* const email = document.getElementById("Email")
const nombreCompleto = document.getElementById("nombreCompleto")
const dni = document.getElementById("dni")
const ciudad = document.getElementById("ciudad")
const municipio = document.getElementById("municipio")
const codigoPostal = document.getElementById("cp")
const direccion = document.getElementById("direccion")
const interes = 1.70;*/

const tiempo = 1


const interes = 1.70;

function select() {
    const selectPrice = document.getElementById("valorMonto");
    const x =(selectPrice.selectedOptions[0].value);
    const valor = (x * interes * tiempo)


    const creacionElemento = document.getElementById("montoDevolucion");
    const valorDevolver = document.getElementById('valorTotal')
    valorDevolver.textContent = valor;
    creacionElemento.appendChild(valorDevolver)
}

function popUpError() {
    Swal.fire({
        icon: 'error',
        title: 'Uy que pasó!...',
        text: 'rellena los campos!',
    })
}

function popUpTodoBien() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu Prestamo ha sido aceptado exitosamente!',
        showConfirmButton: false,
        timer: 2000
      })
}

function saveLocalStorage() {
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("Email").value;
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const ciudad = document.getElementById("ciudad").value;
    const municipio = document.getElementById("municipio").value;
    const codigoPostal = document.getElementById("cp").value;
    const direccion = document.getElementById("direccion").value;
    const interes = 1.70;
    localStorage.setItem("dataForm", JSON.stringify({nombre:nombreCompleto, email:email, dni:dni, ciudad:ciudad, municipio:municipio, cp:codigoPostal, direccion:direccion, interes:interes}));
    console.log("los datos se guardaron pa");
}

function checkForm(evento) {
    evento.preventDefault();
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("Email").value;
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const ciudad = document.getElementById("ciudad").value;
    const municipio = document.getElementById("municipio").value;
    const codigoPostal = document.getElementById("cp").value;
    const direccion = document.getElementById("direccion").value;

    if  ((dni.length <= 6) || (dni.length >= 9)) {
        popUpError();
        return false;
    } 

    if (email.length < 7) {
        popUpError()
        return false;
    }  
    saveLocalStorage();
    popUpTodoBien();
}

document.getElementById("boton-final").addEventListener("click", checkForm);



