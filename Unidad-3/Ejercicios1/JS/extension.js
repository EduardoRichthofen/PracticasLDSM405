function calcularPromedioTemperaturas(){
    let temperaturas = new Array(7)
    let suma = 0;

    for(let i=0; i<7; i++){
        let valor= prompt("Captura la temperatura " + (i+1) + " de 7:");
        temperaturas[i]=parseFloat(valor);
        console.log("Temperatura" + (i+1)+ ": " + temperaturas[i]);
    }

    for (let j=0; j<7; j++){
        suma += temperaturas[j];
    }
    let promedioGeneral = suma/7;

    let tempMaxima= Math.max(...temperaturas);
    let tempMinima= Math.min(...temperaturas);
    let promediosExtremos= (tempMaxima + tempMinima)/2;

    var cadena='';
    cadena += '<div>Lista de Temperaturas Capturadas:</div>';
    
    for (let k = 0; k < 7; k++) {
        cadena += '<div>Temperatura ' + (k + 1) + ': ' + temperaturas[k] + ' °C</div>';
    }

    cadena +='<hr>';
    cadena +='<div>Suma total: ' + suma.toFixed(2) + '</div>';
    cadena +='<div>Temperatura promedio (7 días): ' + promedioGeneral.toFixed(2) + ' °C</div>';
    cadena +='<div>Temperatura Máxima: ' + tempMaxima.toFixed(2) + ' °C</div>';
    cadena +='<div>Temperatura Mínima: ' + tempMinima.toFixed(2) + ' °C</div>';
    cadena +='<div>Promedio (Máxima y Mínima): ' + promediosExtremos.toFixed(2) + ' °C</div>';

    document.getElementById("resultadoTemperaturas").innerHTML = cadena;
}

function dibujarOcho() {
    var cadena = '';

    cadena += '<div>S   S  S</div>';

    for (let i = 0; i < 2; i++) {
        cadena += '<div>S         S</div>';
    }

    cadena += '<div>S   S  S   </div>';

    for (let j = 0; j < 2; j++) {
        cadena += '<div>S         S</div>';
    }

    cadena += '<div>S   S   S   </div>';

    document.getElementById("resultadoOcho").innerHTML = cadena;
}

function gestionarAlumnos() {
    let alumnos = new Array(10);
    var cadena = '';

    for (let i = 0; i < 10; i++) {
        alumnos[i] = prompt("Captura el nombre del alumno " + (i + 1) + " de 10:");
    }

    cadena += '<div>Lista original de alumnos:</div>';
    for (let i = 0; i < 10; i++) {
        cadena += '<div>Posición ' + i + ': ' + alumnos[i] + '</div>';
    }

    cadena += '<hr>';

    let inicioEliminar = parseInt(prompt("¿De qué posición deseas empezar a eliminar? (0 al 9):"));
    let cantidadEliminar = parseInt(prompt("¿Cuántas posiciones deseas eliminar a partir de ahí?"));

    alumnos.splice(inicioEliminar, cantidadEliminar);

    cadena += '<div>Lista después de eliminar el rango:</div>';
    for (let i = 0; i < alumnos.length; i++) {
        cadena += '<div>Posición ' + i + ': ' + alumnos[i] + '</div>';
    }

    cadena += '<hr>';

    let nombreBuscar = prompt("Ingresa un nombre para buscar y vaciar su posición:");
    let encontrada = false;

    for (let j = 0; j < alumnos.length; j++) {
        if (alumnos[j] === nombreBuscar) {
            alumnos[j] = "Vacío";
            encontrada = true;
        }
    }

    if (encontrada) {
        cadena += '<div>Se encontró y vació la posición del alumno: ' + nombreBuscar + '</div>';
    } else {
        cadena += '<div>No se encontró el alumno ' + nombreBuscar + ' en la lista actual.</div>';
    }

    cadena += '<br><div>Lista final de alumnos:</div>';
    for (let i = 0; i < alumnos.length; i++) {
        cadena += '<div>Posición ' + i + ': ' + alumnos[i] + '</div>';
    }

    document.getElementById("resultadoAlumnos").innerHTML = cadena;
}

let diasSemana = new Array(7);
diasSemana[0] = "lunes";
diasSemana[1] = "martes";
diasSemana[2] = "miercoles";
diasSemana[3] = "jueves";
diasSemana[4] = "viernes";
diasSemana[5] = "sabado";
diasSemana[6] = "domingo";

let agendaMatriz;

function agenda_definicion() {
    agendaMatriz = new Array(7);
    for (let i = 0; i < 7; i++) {
        agendaMatriz[i] = new Array(3);
    }
    llenar_agenda();
}

function llenar_agenda() {
    for (let i = 0; i < 7; i++) {
        let horaInput = prompt("Ingresa la hora para el día " + diasSemana[i] + " (ej: 19:00):");
        let eventoInput = prompt("Ingresa el tipo de evento para el día " + diasSemana[i] + " (ej: Cafeteria):");
        let descripcionInput = prompt("Ingresa la descripción para el día " + diasSemana[i] + " (ej: Mi roomie paga):");

        agendaMatriz[i][0] = horaInput;
        agendaMatriz[i][1] = eventoInput;
        agendaMatriz[i][2] = descripcionInput;
    }
    imprimir_agenda();
}

function imprimir_agenda() {
    var aAgenda = '';
    
    aAgenda += '<div>hora         evento         descripcion</div>';
    aAgenda += '<hr>';

    for (let i = 0; i < 7; i++) {
        let diaActual = diasSemana[i];
        let horaVal = agendaMatriz[i][0];
        let eventoVal = agendaMatriz[i][1];
        let descVal = agendaMatriz[i][2];

        aAgenda += '<div>' + diaActual + '     ' + horaVal + '     ' + eventoVal + '     ' + descVal + '</div>';
    }

    document.getElementById("impAgenda").innerHTML = aAgenda;
}