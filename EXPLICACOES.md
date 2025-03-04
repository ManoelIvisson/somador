# Sobre este arquivo

Este arquivo contém as informações e explicações para serem implementadas no site em pop-ups, modais e etc...

## Portas Lógicas

São circuitos que operam com sinais digitais, realizando operações lógicas básicas e produzindo uma saída com base em suas entradas.

## Meio-Somador

### Como funciona?

Um meio-somador é um circuito que irá efetuar a **soma de dois dígitos (dois bits)**. Imagine a soma realizada no sistema **decimal**:

``` 
    4   ----> Valor 1
+
    5   ----> Valor 2
________
    9   ----> Resultado
```

Para o sistema **binário**, ficaria:

``` 
    0   ----> Valor 1
+
    1   ----> Valor 2
________
    1   ----> Resultado
```

O meio-somador irá verificar, utilizando um **XOR**, os valores 1 e 2, vendo se a soma realizada é `0 + 1` ou `1 + 0` e exibir o resultado `1`.

### O que é "Carry"?

Vejamos novamente o sistema decimal:

``` 
    6   ----> Valor 1
+
    5   ----> Valor 2
________
   11   ----> Resultado
```

Opa, agora temos um dígito nas dezenas e outro nas unidades. Ou seja, **excedemos o valor que a unidade pode suportar** e completamos uma dezena (em outras palavras o "leva-um").

Para o sistema **binário**, teríamos:

``` 
    1   ----> Valor 1
+
    1   ----> Valor 2
________
   10   ----> Resultado
```

O **Carry** seria esse "leva-um", já que o meio-somador não pode representar o valor apenas usando a soma. Portanto, teremos uma **AND** para identificar quando estamos somando `1 + 1` e assim exibir o **carry igual a 1**.

### Houston, temos um problema

Caso já tivéssemos um **carry** e precisássemos somar `1 + 1 + 1`, o meio-somador seria incapaz de realizar esta soma. Por isso, precisamos de um **somador completo**.