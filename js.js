// Função para simular a porta AND
function portaAND(valor1, valor2) {
    if (valor1 == 1 && valor2 == 1) {
        return 1;
    } else {
        return 0;
    }
}

// Função para simular a porta XOR
function portaXOR(valor1, valor2) {
    if (valor1 != valor2) {
        return 1;
    } else {
        return 0;
    }
}

// Função para o Meio Somador
function meioSomador(valor1, valor2) {
    let soma = portaXOR(valor1, valor2);  // Soma = A XOR B
    let carry = portaAND(valor1, valor2); // Carry = A AND B
    return [soma, carry];
}

// Função para o Somador Completo
function somadorCompleto(a, b, cin) {
    // Primeira operação do meio somador
    let soma1 = portaXOR(a, b);
    let carry1 = portaAND(a, b);

    // Segunda operação do meio somador com o carry de entrada (Cin)
    let somaFinal = portaXOR(soma1, cin);
    let carryFinal = portaAND(soma1, cin);

    // O carry final será a combinação entre o carry1 e o carryFinal
    carryFinal = carry1 || carryFinal;

    return [somaFinal, carryFinal];
}

// Função para limpar os resultados do Meio Somador
function limpaResultadosMS() {
    document.getElementById('somaMS').textContent = "Soma = ";
    document.getElementById('carryMS').textContent = "Carry = ";
}

// Função para limpar os resultados do Somador Completo
function limpaResultadosSC() {
    document.getElementById('somaSC').textContent = "Soma = ";
    document.getElementById('carrySC').textContent = "Carry = ";
}

// Função para alternar entre 0 e 1 nos botões
function toggleButton(button) {
    if (button.textContent === "0") {
        button.textContent = "1";
        button.classList.add("active");
    } else {
        button.textContent = "0";
        button.classList.remove("active");
    }
    // Atualiza os cálculos automaticamente
    if (button.id.includes("MS")) {
        calculaMeioSomador();
    } else if (button.id.includes("SC") || button.id.includes("Cin")) {
        calculaSomadorCompleto();
    } else if (button.id.includes("A") || button.id.includes("B")) {
        calculaSomador4Bits();
    }
}

// Função para obter o valor de um botão
function getButtonValue(buttonId) {
    return parseInt(document.getElementById(buttonId).textContent);
}

// Função para calcular o Meio Somador
function calculaMeioSomador() {
    limpaResultadosMS(); // Limpa apenas os resultados do Meio Somador
    let a = getButtonValue("entradaAMS");
    let b = getButtonValue("entradaBMS");

    let resultado = meioSomador(a, b);
    let soma = resultado[0];
    let carry = resultado[1];

    document.getElementById('somaMS').textContent += soma;
    document.getElementById('carryMS').textContent += carry;
}

// Função para calcular o Somador Completo
function calculaSomadorCompleto() {
    limpaResultadosSC(); // Limpa apenas os resultados do Somador Completo
    let a = getButtonValue("entradaASC");
    let b = getButtonValue("entradaBSC");
    let cin = getButtonValue("entradaCin");

    let resultado = somadorCompleto(a, b, cin);
    let soma = resultado[0];
    let carry = resultado[1];

    document.getElementById('somaSC').textContent += soma;
    document.getElementById('carrySC').textContent += carry;
}

// Função para o Somador de 4 Bits
function somador4Bits(a, b) {
    let carry = 0;
    let soma = [];
    for (let i = 0; i < 4; i++) {
        let resultado = somadorCompleto(a[i], b[i], carry);
        soma.push(resultado[0]);
        carry = resultado[1];
    }
    return [soma, carry];
}

// Função para calcular o Somador de 4 Bits
function calculaSomador4Bits() {
    let a = [
        getButtonValue("entradaA0"),
        getButtonValue("entradaA1"),
        getButtonValue("entradaA2"),
        getButtonValue("entradaA3")
    ];
    let b = [
        getButtonValue("entradaB0"),
        getButtonValue("entradaB1"),
        getButtonValue("entradaB2"),
        getButtonValue("entradaB3")
    ];

    let resultado = somador4Bits(a, b);
    let soma = resultado[0].join("");
    let carry = resultado[1];

    document.getElementById('soma4Bits').textContent = "Soma = " + soma;
    document.getElementById('carry4Bits').textContent = "Carry = " + carry;
}

// Adiciona event listeners aos botões
document.getElementById('entradaAMS').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaBMS').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaASC').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaBSC').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaCin').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaA0').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaB0').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaA1').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaB1').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaA2').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaB2').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaA3').addEventListener('click', function() {
    toggleButton(this);
});

document.getElementById('entradaB3').addEventListener('click', function() {
    toggleButton(this);
});

// Adiciona classes para identificar LSB e MSB
document.getElementById('entradaA0').classList.add('lsb');
document.getElementById('entradaB0').classList.add('lsb');
document.getElementById('entradaA3').classList.add('msb');
document.getElementById('entradaB3').classList.add('msb');

// Inicializa os cálculos ao carregar a página
calculaMeioSomador();
calculaSomadorCompleto();
calculaSomador4Bits();