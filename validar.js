let nombre = getElementById("Nombre").value

function validar() {
    if (document.getElementById("Nombre").value.length < 3)
        nombre = false;
}

console.log(nombre)