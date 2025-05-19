// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();


console.log("Tipo de triângulo");

// Solicita ao usuário que forneça os dados necessários
let a = parseFloat(prompt("Digite o valor do primeiro lado: ")) 
let b = parseFloat(prompt("Digite o valor do segundo lado: ")) 
let c = parseFloat(prompt("Digite o valor do terceiro lado:"))

if ( a< b+c  && b< a+c && c< a+b){
    console.log("É um triangulo válido;")
     if (a === b && b === c) {
        console.log("É um triângulo equilátero.");
    } else if (a === b || b === c || a === c) {
        console.log("É um triângulo isósceles.");
    } else {
        console.log("É um triângulo escaleno.");
    }
} else{
    console.log (" Não é um triangulo")

}