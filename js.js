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

function getValoresEntrada() {
    return {
        a: [
            getButtonValue("entradaA0"),
            getButtonValue("entradaA1"),
            getButtonValue("entradaA2"),
            getButtonValue("entradaA3")
        ],
        b: [
            getButtonValue("entradaB0"),
            getButtonValue("entradaB1"),
            getButtonValue("entradaB2"),
            getButtonValue("entradaB3")
        ]
    };
}

function calculaSomador4Bits() {
    let { a, b } = getValoresEntrada();
    let resultado = somador4Bits(a, b);
    let soma = resultado[0].reverse().join(""); // Inverte a ordem dos bits
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

class BotaoRaioX {
    constructor (id, fio_afetado) {
        this.id = id;
        this.fio_afetado = fio_afetado;
        this.portas_afetadas = [];
        this.estado = false;
    };

    addPortas (portas_afetadas) {
        portas_afetadas.forEach(porta => {
            this.portas_afetadas.push(porta)
        })
    };

    mudaEstado () {
        if (this.estado) {
            this.estado = false;
            document.getElementById(this.id).src="img/botao-off.png";
            document.getElementById(this.fio_afetado).style.opacity="50%";
            this.portas_afetadas.forEach(porta => {
                porta.mudaEstado()
            });
        } else {
            this.estado = true;
            document.getElementById(this.id).src="img/botao-on.png";
            document.getElementById(this.fio_afetado).style.opacity="100%";
            this.portas_afetadas.forEach(porta => {
                porta.mudaEstado()
            });
        };
    };
};

class portaAndRaioX {
    constructor (entradas, saida) {
        this.entradas = entradas;
        this.saida = saida;
        this.portas_afetadas = [];
        this.estado = false;
    };

    addPortas (portas_afetadas) {
        portas_afetadas.forEach(porta => {
            this.portas_afetadas.push(porta)
        })
    };

    mudaEstado () {
        if (this.entradas[0].estado && this.entradas[1].estado) {
            this.estado = true;
            document.getElementById(this.saida).style.opacity="100%";
            this.portas_afetadas.forEach(porta => {
                porta.mudaEstado()
            });
        } else {
            this.estado = false;
            document.getElementById(this.saida).style.opacity="50%";
            this.portas_afetadas.forEach(porta => {
                porta.mudaEstado()
            });
        };
    };
};

class portaOr3RaioX {
    constructor (entradas, saida, led=false) {
        this.entradas = entradas;
        this.saida = saida;
        this.portas_afetadas = [];
        this.estado = false;
        this.led=led;
    };

    addPortas (portas_afetadas) {
        portas_afetadas.forEach(porta => {
            this.portas_afetadas.push(porta)
        })
    };

    mudaEstado () {
        if (this.entradas[0].estado || this.entradas[1].estado || this.entradas[2].estado) {
            this.estado = true;
            document.getElementById(this.saida).style.opacity="100%";
            if (this.led[0]) {
                document.getElementById(this.led[1]).src = this.led[2];
            }
            this.portas_afetadas.forEach(porta => {
                porta.mudaEstado()
            });
        } else {
            this.estado = false;
            document.getElementById(this.saida).style.opacity="50%";
            if (this.led[0]) {
                document.getElementById(this.led[1]).src = this.led[3];
            }
            this.portas_afetadas.forEach(porta => {
                porta.mudaEstado()
            });
        }
    }
};

class portaXorRaioX {
    constructor (entradas, saida, led=[false]) {
        this.entradas = entradas;
        this.saida = saida;
        this.portas_afetadas = [];
        this.estado = false;
        this.led=led;
    };

    addPortas (portas_afetadas) {
        portas_afetadas.forEach(porta => {
            this.portas_afetadas.push(porta)
        })
    };

    mudaEstado () {
        if (this.entradas[0].estado != this.entradas[1].estado) {
            this.estado = true;
            document.getElementById(this.saida).style.opacity="100%";
            if (this.led[0]) {
                document.getElementById(this.led[1]).src = this.led[2];
            }
            this.portas_afetadas.forEach(porta => {
                porta.mudaEstado()
            });
        } else {
            this.estado = false;
            document.getElementById(this.saida).style.opacity="50%";
            if (this.led[0]) {
                document.getElementById(this.led[1]).src = this.led[3];
            }
            this.portas_afetadas.forEach(porta => {
                porta.mudaEstado()
            });
        }
    }
};

botaoA1 = new BotaoRaioX("botao-a1", "fio-botao-a1");
botaoB1 = new BotaoRaioX("botao-b1", "fio-botao-b1");
botaoCarry = new BotaoRaioX("botao-carry", "fio-botao-carry");

botaoA2 = new BotaoRaioX("botao-a2", "fio-botao-a2");
botaoB2 = new BotaoRaioX("botao-b2", "fio-botao-b2");

botaoA3 = new BotaoRaioX("botao-a3", "fio-botao-a3");
botaoB3 = new BotaoRaioX("botao-b3", "fio-botao-b3");

botaoA4 = new BotaoRaioX("botao-a4", "fio-botao-a4");
botaoB4 = new BotaoRaioX("botao-b4", "fio-botao-b4");



portaAndCima1 = new portaAndRaioX([botaoB1, botaoCarry], "saida-and-cima1");
portaAndMeio1 = new portaAndRaioX([botaoA1, botaoB1], "saida-and-meio1");
portaAndBaixo1 = new portaAndRaioX([botaoA1, botaoCarry], "saida-and-baixo1");
portaOr1 = new portaOr3RaioX ([portaAndCima1, portaAndMeio1, portaAndBaixo1], "carry-entrada2");

portaAndCima2 = new portaAndRaioX([botaoB2, portaOr1], "saida-and-cima2");
portaAndMeio2 = new portaAndRaioX([botaoA2, botaoB2], "saida-and-meio2");
portaAndBaixo2 = new portaAndRaioX([botaoA2, portaOr1], "saida-and-baixo2");
portaOr2 = new portaOr3RaioX ([portaAndCima2, portaAndMeio2, portaAndBaixo2], "carry-entrada3");

portaAndCima3 = new portaAndRaioX([botaoB3, portaOr2], "saida-and-cima3");
portaAndMeio3 = new portaAndRaioX([botaoA3, botaoB3], "saida-and-meio3");
portaAndBaixo3 = new portaAndRaioX([botaoA3, portaOr2], "saida-and-baixo3");
portaOr3 = new portaOr3RaioX ([portaAndCima3, portaAndMeio3, portaAndBaixo3], "carry-entrada4");

portaAndCima4 = new portaAndRaioX([botaoB4, portaOr3], "saida-and-cima4");
portaAndMeio4 = new portaAndRaioX([botaoA4, botaoB4], "saida-and-meio4");
portaAndBaixo4 = new portaAndRaioX([botaoA4, portaOr3], "saida-and-baixo4");
portaOr4 = new portaOr3RaioX ([portaAndCima4, portaAndMeio4, portaAndBaixo4], "carry-saida", [true, "ledcarry", "img/led-carry-on.png", "img/led-carry-off.png"]);



portaXorBaixo1 = new portaXorRaioX([botaoB1, botaoCarry], "saida-xor1");
portaXorCima1 = new portaXorRaioX([botaoA1, portaXorBaixo1], "saida1", [true, "led1", "img/led1-on.png", "img/led1-off.png"]);

portaXorBaixo2 = new portaXorRaioX([botaoB2, portaOr1], "saida-xor2");
portaXorCima2 = new portaXorRaioX([botaoA2, portaXorBaixo2], "saida2", [true, "led2", "img/led2-on.png", "img/led2-off.png"]);

portaXorBaixo3 = new portaXorRaioX([botaoB3, portaOr2], "saida-xor3");
portaXorCima3 = new portaXorRaioX([botaoA3, portaXorBaixo3], "saida3", [true, "led3", "img/led3-on.png", "img/led3-off.png"]);

portaXorBaixo4 = new portaXorRaioX([botaoB4, portaOr3], "saida-xor4");
portaXorCima4 = new portaXorRaioX([botaoA4, portaXorBaixo4], "saida4", [true, "led4", "img/led4-on.png", "img/led4-off.png"]);



botaoA1.addPortas([portaAndMeio1, portaAndBaixo1, portaXorCima1]);
botaoB1.addPortas([portaAndCima1, portaAndMeio1, portaXorBaixo1]);
botaoCarry.addPortas([portaAndCima1, portaAndBaixo1, portaXorBaixo1]);

botaoA2.addPortas([portaAndMeio2, portaAndBaixo2, portaXorCima2]);
botaoB2.addPortas([portaAndCima2, portaAndMeio2, portaXorBaixo2]);
portaOr1.addPortas([portaAndCima2, portaAndBaixo2, portaXorBaixo2]);

botaoA3.addPortas([portaAndMeio3, portaAndBaixo3, portaXorCima3]);
botaoB3.addPortas([portaAndCima3, portaAndMeio3, portaXorBaixo3]);
portaOr2.addPortas([portaAndCima3, portaAndBaixo3, portaXorBaixo3]);

botaoA4.addPortas([portaAndMeio4, portaAndBaixo4, portaXorCima4]);
botaoB4.addPortas([portaAndCima4, portaAndMeio4, portaXorBaixo4]);
portaOr3.addPortas([portaAndCima4, portaAndBaixo4, portaXorBaixo4]);



portaAndCima1.addPortas([portaOr1]);
portaAndMeio1.addPortas([portaOr1]);
portaAndBaixo1.addPortas([portaOr1]);

portaAndCima2.addPortas([portaOr2]);
portaAndMeio2.addPortas([portaOr2]);
portaAndBaixo2.addPortas([portaOr2]);

portaAndCima3.addPortas([portaOr3]);
portaAndMeio3.addPortas([portaOr3]);
portaAndBaixo3.addPortas([portaOr3]);

portaAndCima4.addPortas([portaOr4]);
portaAndMeio4.addPortas([portaOr4]);
portaAndBaixo4.addPortas([portaOr4]);



portaXorBaixo1.addPortas([portaXorCima1]);

portaXorBaixo2.addPortas([portaXorCima2]);

portaXorBaixo3.addPortas([portaXorCima3]);

portaXorBaixo4.addPortas([portaXorCima4]);