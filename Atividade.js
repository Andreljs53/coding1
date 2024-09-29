var nome = " André";
var idade = " 53 ";
console.log ("Olá meu nome é"  + nome +  "e tenho"  + idade +  "anos.");

var nome = "  André";
var cidade = " Recife ";
console.log(nome + " de " + cidade +'.');

let num1 = 50;
let num2 = 10;
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);

let base = 60;
let altura = 10;
let area = (base * altura) / 2;
console.log(`A área do triângulo é ${area}.`)

let nota1 = 5.0;
let nota2 = 8.0;
let nota3 = 9.0;
let media = (nota1 + nota2 + nota3) / 3;
console.log(`O resultado da média é ${media}.`);

const precoOriginal = 2500;
const percentualDesconto = 15;
const desconto = (precoOriginal * percentualDesconto) / 100;
const precoFinal = precoOriginal - desconto;
console.log(`O preço original do produto é R$ ${precoOriginal.toFixed(2)}.`);
console.log(`Com um desconto de ${percentualDesconto}%, o valor final é R$ ${precoFinal.toFixed(2)}.`)

let salarioBruto = 23000;
let aliquota;
if (salarioBruto <= 2400) {
    aliquota = 0;
} else if (salarioBruto <= 10000) {
    aliquota = 0.15;
} else {
    aliquota = 0.275;
}
let imposto = salarioBruto * aliquota;
console.log(`O imposto de renda a ser pago é ${imposto.toFixed(2)}.`);

let valorOriginal = 360;
let taxaCambio = 6.55;
let valorConvertido = valorOriginal * taxaCambio;
console.log(`O valor convertido é ${valorConvertido.toFixed(2)} na moeda final.`);

let temperaturaCelsius = 33;
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
console.log(`A temperatura em Fahrenheit é ${temperaturaFahrenheit.toFixed(2)}.`);

let peso = 133;
let tamanho = 1.84;
let imc = peso / (tamanho * tamanho);
console.log(`Seu IMC é ${imc.toFixed(2)}.`);