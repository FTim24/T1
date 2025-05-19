// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();


console.log("Cálculo do IMC");

// Solicita ao usuário que forneça os dados necessários
let massa = parseFloat(prompt("Digite sua massa em kg: ")) 
let altura = parseFloat(prompt("Digite sua altura em metros: ")) 

let imc = massa/(altura*altura)

// Mostra o resultado com duas casas decimais
console.log("Seu IMC é de", imc.toFixed(2), "kg/m²" )

if (imc<= 18.5){
console.log("Baixo peso")
} else if (imc<=24.9){
console.log("Peso Normal")
} else if (imc<=29.9){
console.log("Sobrepeso")
} else {
console.log("Obesidade")
}