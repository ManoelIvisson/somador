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
    document.getElementById('somaMS').textContent = "Soma = ";
    document.getElementById('carryMS').textContent = "Carry = ";

    document.getElementById('somaSC').textContent = "Soma = ";
    document.getElementById('carrySC').textContent = "Carry = ";
}

function calculaMeioSomador() {
    limpaResultados();
    let a = document.getElementById('entradaAMS').value;
    let b = document.getElementById('entradaBMS').value;

    let soma = meioSomador(a, b)[0];
    let carry = meioSomador(a, b)[1];

    document.getElementById('somaMS').textContent += soma;
    document.getElementById('carryMS').textContent += carry;
}

function calculaSomadorCompleto() {
    limpaResultados();
    let a = document.getElementById('entradaAMS').value;
    let b = document.getElementById('entradaBMS').value;
    let cin = document.getElementById('cin').value;

    let soma = meioSomador(a, b)[0];
    let carry = meioSomador(a, b)[1];

    document.getElementById('somaMS').textContent += soma;
    document.getElementById('carryMS').textContent += carry;
}
