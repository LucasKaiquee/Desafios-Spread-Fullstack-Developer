/*A fórmula de Binet é uma forma de calcular números de Fibonacci.



Sua tarefa é, dado um natural n, calcular o valor de Fibonacci(n) usando a fórmula.

Entrada
A entrada é um número natural n (0 < n ≤ 50).

Saída
A saída é o valor de Fibonacci(n) com 1 casa decimal utilizando a fórmula de Binet dada.

 
Exemplos de Entrada	
1
Exemplos de Saída
1.0

Exemplos de Entrada
2
Exemplos de Saída
1.0

Exemplos de Entrada
3
Exemplos de Saída
2.0
*/

let n = parseInt(prompt());

let fib = (Math.pow((1 + Math.sqrt(5)) / 2, n ) - Math.pow((1 - Math.sqrt(5)) / 2, n )) / Math.sqrt(5);

console.log(fib.toFixed(1));
