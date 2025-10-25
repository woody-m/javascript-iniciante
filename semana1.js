//## **Semana 1 – Fundamentos de JavaScript**

//**Objetivo:** Variáveis, tipos de dados, operadores e console.

//1. Crie uma variável com seu nome e idade e exiba no console.

let nome = "Bruna Lopes";
let idade = 30;

console.log(`O meu nome é ${nome} e minha idade é ${idade}.`);

//2. Crie duas variáveis numéricas e faça operações: soma, subtração, multiplicação e divisão.

let numero1 = 20;
let numero2 = 54;

let soma = numero1 + numero2;
console.log(soma);

let subtracao = numero2 - numero1;
console.log(subtracao);

let multiplicacao = numero1 * numero2;
console.log(multiplicacao);

let divisao = numero2 / numero1;
console.log(divisao);

//3. Crie uma variável booleana (`true` ou `false`) e exiba seu valor no console.

let estaCalorEmRondonia = true;
console.log(estaCalorEmRondonia);

//4. Concatene strings usando ** + ** e também usando **template literals**.
let dia = 'bonito';
console.log('Hoje o dia esta' + dia);

let noite = 'radiante';
console.log(`Hoje a lua está ${noite}!`);

//5. Crie um programa que calcule o **IMC** (peso / altura²) de uma pessoa e exiba o resultado.
//Passo a passo
//Pegue seu peso em quilos (kg).
//Pegue sua altura em metros (m).
//Eleve a altura ao quadrado (altura × altura).pode ser feito com (altura ** 2 ou Math.pow(altura, 2))
//Divida o peso pelo resultado do passo 3.

let peso = 54;
let altura = 1.60;
let alturaAoQuadrado = altura ** 2;

let resultado = peso / alturaAoQuadrado;
console.log(resultado);