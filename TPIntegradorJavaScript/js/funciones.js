

let cantidadEntradas = document.getElementById('cantidadEntrada');
 
let categoria = document.getElementById('opcionCategoria');

let botonResumen = document.getElementById('botonResumen');

let totalCompra = document.getElementById('total');

function resumen() {

    if (categoria.value == "Estudiante") {
        totalCompra =  200 * cantidadEntradas.value * 0.2;
    } else if (categoria.value == "Trainee") {
        totalCompra =  200 * cantidadEntradas.value * 0.5;
    } else if (categoria.value == "Junior") {
        totalCompra =  200 * cantidadEntradas.value * 0.85;
    } else {
        console.log("usted no seleccionó nada")
       
    }
    
    console.log(totalCompra);



    document.getElementById("total").innerHTML = `Total a pagar: $ ${totalCompra}`; 
    //   document.querySelector("#total").innerHTML = `Total a pagar: $ ${totalCompra}`; 
}

function borrar() {
    document.getElementById("total").innerHTML = `Total a pagar: $`;
}

