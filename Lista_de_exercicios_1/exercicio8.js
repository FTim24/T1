// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();


console.log("Digite dois valores diferentes");

// Solicita ao usuário que forneça os dados necessários
let num1 = parseFloat(prompt("Primeiro Valor: ")) 
let num2 = parseFloat(prompt("Segundo Valor: "))

if (num1 == num2){
    console.log("Os numeros são iguais, digite números diferentes")
} else if ( num1 < num2){
    console.log("Valores em ordem crescente:", num1, ",", num2)
}else{
    console.log("Valores em ordem crescente:", num2, ",", num1)
}