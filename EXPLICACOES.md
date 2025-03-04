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
    6   ────> Valor 1
+
    5   ────> Valor 2
________
   11   ────> Resultado
```

Opa, agora temos um dígito nas dezenas e outro nas unidades. Ou seja, **excedemos o valor que a unidade pode suportar** e completamos uma dezena (em outras palavras o "vai-um").

Para o sistema **binário**, teríamos:

``` 
    1   ────> Valor 1
+
    1   ────> Valor 2
________
   10   ────> Resultado
```

O **Carry** seria esse "vai-um", já que o meio-somador não pode representar o valor apenas usando a soma. Portanto, teremos uma **AND** para identificar quando estamos somando `1 + 1` e assim exibir o **carry igual a 1**.

### Houston, temos um problema

Caso já tivéssemos um **carry** e precisássemos somar `1 + 1 + 1`, o meio-somador seria incapaz de realizar esta soma. Por isso, precisamos de um **somador completo**.

## Somador Completo

### Como funciona?

Um somador completo nada mais é do que a união de dois meio-somadores para que se possa representar o "vai-um", além de realizar a soma de vários bits.

Neste caso, nosso **carry** passa a ser representado pelo **Cout** (carry de saída), e teremos também o **Cin** (carry de entrada).

O **Cin** fornece a informação se temos um **carry** ou não. Por exemplo:

``` 
    01   ────> Valor 1
+
    11   ────> Valor 2
________
   100   ────> Resultado
    |
    └────> Carry = 1
```

Ou seja, fazemos `1 + 1`, deixamos `0` e o **carry de entrada para a próxima soma**, será `1`, então ao invés de `0 + 1`, faremos: `1 + 1`. O resultado será `0` e o carry de entrada novamente será `1`. 

Mas não precisamos somar mais nada, esse `1` pode **descer para o resultado**. Este "descer para o resultado" é nosso **carry de saída**.

Além de somar os valores 1 e 2, verificamos se precisamos somar com o **Cin**. A soma disto será o resultado. Nós realizamos um **AND** entre o **Cin** e o resultado da soma entre os valores 1 e 2, sua saída será ligada a uma **OR**. A saída da **AND** entre os valores 1 e 2 também será ligada a esta mesma **OR**.

Esta **OR** é a que identifica se á um **carry de saída (Cout)** ou não.

### Somadores maiores

Podemos expandir e, além de somar de um em um bit, podemos somar dois, quatro, oito, ou quantos bits quisermos. Basta apenas unir a quantidade necessária de somadores completos um no outro.

Para fazer isso, apenas é necessário ter atenção com os **carrys de saída e entrada**. O primeiro **Cin**, ou seja, do **bit menos significativo**, sempre será `0` ─ já que ele nunca terá um "vai-um" na primeira vez. Já para os próximos, podemos ter ou não, por isso, iremos conectar o **Cout** do somador anterior, no **Cin** do próximo somador.

