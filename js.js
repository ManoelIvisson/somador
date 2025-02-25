function portaAND(valor1, valor2) {
    if (valor1 == 1 && valor2 == 1) {
        console.log("Ioiosdasdf")
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

function meioSomador(valor1, valor2) {
    let soma, carry = 0;

    soma = portaXOR(valor1, valor2);
    carry = portaAND(valor1, valor2);
    console.log(carry)

    return [soma, carry];
}

function limpaResultados() {
    document.getElementById('soma').textContent = "Soma = ";
    document.getElementById('carry').textContent = "Carry = ";
}

function calcula() {
    limpaResultados();
    let a = document.getElementById('entradaA').value;
    let b = document.getElementById('entradaB').value;

    let soma = meioSomador(a, b)[0];
    let carry = meioSomador(a, b)[1];

    document.getElementById('soma').textContent += soma;
    document.getElementById('carry').textContent += carry;
}
