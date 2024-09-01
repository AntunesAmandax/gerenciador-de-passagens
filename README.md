# Passagens Aéreas - Sistema de Classes em Node.js

Este projeto implementa um sistema de classes em Node.js para representar passagens aéreas com diferentes categorias: Econômica, Executiva, e Primeira Classe. O sistema permite calcular o valor total a pagar, a quantidade de malas permitidas e se o passageiro tem acesso prioritário.

## Funcionalidades

- **Classe Base (`passagem`)**: Implementa os atributos e métodos básicos de uma passagem aérea.
- **Classes Derivadas**: 
  - `economica`: Herda de `passagem` e implementa suas regras específicas.
  - `executiva`: Herda de `passagem`, permite 1 mala adicional e um custo operacional maior.
  - `primeiraclasse`: Herda de `passagem`, permite 3 malas adicionais e tem acesso prioritário.
- **Conversão para JSON**: Todas as classes podem ser convertidas para JSON utilizando o método `JSON.stringify()`.

## Exemplo de Uso

```javascript
import { economica, executiva, primeiraclasse } from './Aula3p5.js';

let passagens = [];
passagens.push(new economica('10/03/2023', 1010, 500));
passagens.push(new executiva('10/03/2023', 1010, 500));
passagens.push(new primeiraclasse('10/03/2023', 1010, 500));

console.log('Malas: ' + quantidadeMalas(passagens));
console.log('VIPs: ' + qtdVIP(passagens));

let json = JSON.stringify(passagens, null, 2);
console.log(json);
