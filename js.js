function portaAND(valor1, valor2) {
    if (valor1 && valor2) {
        return 1;
    } else {
        return 0;
    }
}

function portaXOR(valor1, valor2) {
    if (valor1 != valor2) {
        return 1;
    } else {
        return 0;
    }
}

function calcula() {
    let a = document.getElementById('entradaA').value
    let b = document.getElementById('entradaB').value
    document.getElementById('res').value = portaXOR(a, b);
}
