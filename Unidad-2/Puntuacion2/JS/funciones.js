function cal() {
   
var n1 = parseFloat(document.getElementById("n1").value);
var n2 = parseFloat(document.getElementById("n2").value);
var operador = document.getElementById("operador").value;
 
 
switch (operador) {
        case "sumar":
            sumar(n1, n2);
            break;
 
        case "restar":
            restar(n1, n2);
            break;
 
        case "multiplicar":
            multiplicar(n1, n2);
            break;
 
        case "dividir":
            dividir(n1, n2);
            break;
 
        case "modulo":
            modulo(n1, n2);
            break;
 
        default:
            document.getElementById("resultadoCalculadora").innerHTML = "Operación no valida";
            break;
    }
}
 
 
function sumar(num1, num2) {
    var resultado = num1 + num2;
    document.getElementById("resultadoCalculadora").innerHTML = "El resultado es: " + resultado;
}
 
function restar(num1, num2) {
    var resultado = num1 - num2;
    document.getElementById("resultadoCalculadora").innerHTML = "El resultado es: " + resultado;
}
 
function multiplicar(num1, num2) {
    var resultado = num1 * num2;
    document.getElementById("resultadoCalculadora").innerHTML = "El resultado es: " + resultado;
}
 
function dividir(num1, num2) {
    if (num2 === 0) {
        document.getElementById("resultadoCalculadora").innerHTML = "No se puede dividir entre cero";
    } else {
        var resultado = num1 / num2;
        document.getElementById("resultadoCalculadora").innerHTML = "El resultado es: " + resultado;
    }
}
 
function modulo(num1, num2) {
    var resultado = num1 % num2;
    document.getElementById("resultadoCalculadora").innerHTML = "El residuo es: " + resultado;
}

function pieza(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var op = document.getElementById("op").value;
}