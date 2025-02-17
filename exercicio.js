// Exercício 1: Arrow Function com um parâmetro

console.log("Exercício 1 \n");
const dobro = (a) => a * 2;
console.log("-" + dobro(7));
console.log("-" + dobro(15));
console.log("\n")

// Exercício 2: Arrow Function com múltiplos parâmetros

console.log("Exercício 2 \n");
const dividir = (a, b) => a / b;
console.log("-" + dividir(10, 2));
console.log("-" + dividir(9, 3));
console.log("\n");

// Exercício 3: Arrow Function com múltiplas linhas

console.log("Exercício 3 \n");
const mensagemBoasVindas = (nome) => {
    return `Seja bem-vindo, ${nome}!`;
};
console.log(mensagemBoasVindas("Marcio"));
console.log(mensagemBoasVindas("Jessie"));
console.log("\n");

// Exercício 4: Higher-Order Function personalizada

console.log("Exercício 4 \n");
const executarOperacao = (a, b, operacao) => operacao(a, b);

console.log("-" + executarOperacao(8, 15, (x, y) => x + y)); 
console.log("-" + executarOperacao(77, 10, (x, y) => x - y)); 
console.log("-" + executarOperacao(10, 30, (x, y) => x * y)); 
console.log("-" + executarOperacao(12, 2, (x, y) => x / y) + "\n"); 

// Exercício 5: map() – Transformação de um array

console.log("Exercício 5 \n");
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(num => num * 0.9);
console.log(precosComDesconto + "\n"); 

// Exercício 6: filter() – Filtrando valores em um array

console.log("Exercício 6 \n");
const idades = [12, 25, 17, 30, 14, 19];
const menoresDeIdade = idades.filter(idade => idade <= 18);
console.log("-" + menoresDeIdade + "\n");

// Exercício 7: reduce() – Somando valores de um array

console.log("Exercício 7 \n");
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((total, num) => total * num, 1);
console.log("-" + produto + "\n"); 

