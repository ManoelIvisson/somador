
### 1. Função `somador4Bits(a, b)`:

Essa função é responsável por realizar a soma de dois números binários de 4 bits, `a` e `b`, utilizando a lógica de um somador completo em cascata.

#### Parâmetros:
- `a`: Um array de 4 bits representando o primeiro número binário (ex: `[1, 0, 1, 0]`).
- `b`: Um array de 4 bits representando o segundo número binário (ex: `[0, 1, 1, 1]`).

#### Funcionamento:
1. **Inicialização**:
   - `carry = 0`: Inicializa o carry (vai-um) como 0, pois no início não há carry.
   - `soma = []`: Inicializa um array vazio para armazenar os bits da soma.

2. **Loop de 4 iterações**:
   - O loop `for (let i = 0; i < 4; i++)` percorre cada bit dos números `a` e `b`, do **menos significativo (LSB)** para o **mais significativo (MSB)**.
   - Para cada iteração:
     - Chama a função `somadorCompleto(a[i], b[i], carry)` para somar os bits `a[i]` e `b[i]`, juntamente com o carry da iteração anterior.
     - O resultado da função `somadorCompleto` é um array `[somaBit, carryBit]`, onde:
       - `somaBit`: O bit resultante da soma.
       - `carryBit`: O carry gerado para a próxima iteração.
     - Adiciona o `somaBit` ao array `soma` usando `soma.push(resultado[0])`.
     - Atualiza o `carry` com o valor de `carryBit` para a próxima iteração.

3. **Retorno**:
   - Retorna um array `[soma, carry]`, onde:
     - `soma`: Um array com os 4 bits da soma (ex: `[1, 0, 0, 1]`).
     - `carry`: O carry final (vai-um) após a soma dos 4 bits.

---

### 2. Função `getValoresEntrada()`:

Essa função é responsável por coletar os valores dos botões de entrada (`A0`, `A1`, `A2`, `A3`, `B0`, `B1`, `B2`, `B3`) e retorná-los como dois arrays: `a` e `b`.

#### Funcionamento:
1. **Coleta dos Valores**:
   - Usa a função `getButtonValue(buttonId)` para obter o valor de cada botão.
   - Os valores são armazenados em dois arrays:
     - `a`: Contém os valores dos botões `A0`, `A1`, `A2`, `A3`.
     - `b`: Contém os valores dos botões `B0`, `B1`, `B2`, `B3`.

2. **Retorno**:
   - Retorna um objeto com os dois arrays:
     ```javascript
     return {
         a: [valorA0, valorA1, valorA2, valorA3],
         b: [valorB0, valorB1, valorB2, valorB3]
     };
     ```

---

### 3. Função `calculaSomador4Bits()`:

Essa função é responsável por calcular a soma de 4 bits e exibir o resultado na interface.

#### Funcionamento:
1. **Coleta dos Valores de Entrada**:
   - Chama a função `getValoresEntrada()` para obter os valores dos botões de entrada.
   - Desestrutura o objeto retornado em dois arrays: `a` e `b`.

2. **Cálculo da Soma**:
   - Chama a função `somador4Bits(a, b)` para calcular a soma dos dois números binários de 4 bits.
   - O resultado é um array `[soma, carry]`, onde:
     - `soma`: Um array com os 4 bits da soma (ex: `[1, 0, 0, 1]`).
     - `carry`: O carry final (vai-um).

3. **Inversão da Ordem da Soma**:
   - Como os bits da soma são calculados do **LSB** para o **MSB**, mas queremos exibi-los do **MSB** para o **LSB**, usamos `resultado[0].reverse()` para inverter a ordem dos bits.
   - Em seguida, usamos `.join("")` para converter o array de bits em uma string (ex: `"1001"`).

4. **Exibição do Resultado**:
   - Atualiza o conteúdo dos elementos HTML com os resultados:
     - `soma4Bits`: Exibe a soma (ex: `"Soma = 1001"`).
     - `carry4Bits`: Exibe o carry final (ex: `"Carry = 0"`).

---

### Exemplo Prático:

Suponha que os valores dos botões sejam:
- `A`: `1 0 1 0` (ou seja, `A0 = 0`, `A1 = 1`, `A2 = 0`, `A3 = 1`).
- `B`: `0 1 1 1` (ou seja, `B0 = 1`, `B1 = 1`, `B2 = 1`, `B3 = 0`).

#### Passo a Passo:
1. **Coleta dos Valores**:
   - `getValoresEntrada()` retorna:
     ```javascript
     {
         a: [0, 1, 0, 1],
         b: [1, 1, 1, 0]
     }
     ```

2. **Cálculo da Soma**:
   - `somador4Bits(a, b)` realiza a soma bit a bit:
     - Bit 0: `0 + 1 + carry 0` → Soma = `1`, Carry = `0`.
     - Bit 1: `1 + 1 + carry 0` → Soma = `0`, Carry = `1`.
     - Bit 2: `0 + 1 + carry 1` → Soma = `0`, Carry = `1`.
     - Bit 3: `1 + 0 + carry 1` → Soma = `0`, Carry = `1`.
   - Resultado:
     ```javascript
     [soma, carry] = [[1, 0, 0, 0], 1]
     ```

3. **Inversão da Ordem**:
   - `soma.reverse().join("")` converte `[1, 0, 0, 0]` em `"0001"`.

4. **Exibição**:
   - `soma4Bits`: `"Soma = 0001"`.
   - `carry4Bits`: `"Carry = 1"`.

---

### Resumo:

- **`somador4Bits(a, b)`**: Realiza a soma de dois números binários de 4 bits, bit a bit, considerando o carry.
- **`getValoresEntrada()`**: Coleta os valores dos botões de entrada e os organiza em arrays.
- **`calculaSomador4Bits()`**: Coordena a coleta dos valores, o cálculo da soma e a exibição dos resultados na interface.