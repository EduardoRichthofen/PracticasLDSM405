function guardar() {
    var nombre_auto = document.getElementById('nombre_auto');
    if (nombre_auto) {
        var nombre = document.getElementById('nombre_auto').value;
        alert(nombre);
        return;
    }
    var edadCampo = document.getElementById('Edad');
    if (edadCampo) {
        var nombre = document.getElementById('nombre').value;
        alert(nombre);

        var App = document.getElementById('App').value;
        alert(App);

        var Apm = document.getElementById('Apm').value;
        alert(Apm);

        var Edad = document.getElementById('Edad').value;
        alert(Edad);
        return;
    }
    var comentariosCampo = document.getElementById('comentarios');
    if (comentariosCampo) {
        var nombre = document.getElementById('nombre').value;
        alert(nombre);

        var comentarios = document.getElementById('comentarios').value;
        alert(comentarios);
        return;
    }
    var autoCampo = document.getElementById('auto');
    if (autoCampo) {
        var auto = document.getElementById('auto').value;
        alert(auto);

        var corredor = document.getElementById('corredor').value;
        alert(corredor);

        var auto2 = document.getElementById('auto-2').value;
        alert(auto2);

        var escuderia = document.getElementById('escuderia').value;
        alert(escuderia);
        return;
    }
}