// Importa o módulo prompt-sync para leitura de dados via terminal
const prompt = require('prompt-sync')();

// Apresenta o menu ao usuário
console.log("MENU DE OPÇÕES:");
console.log("1 - Primeira opção");
console.log("2 - Segunda opção");
console.log("3 - Terceira opção");

// Solicita ao usuário que escolha uma das opções
let opcao = parseInt(prompt("Escolha uma opção (1, 2 ou 3): ")) 

switch(opcao){
    case 1 :
        console.log("Você selecionou a primeira opção")
        break;
    
    case 2 :
            console.log("Você selecionou a segunda opção")
            break;
    
    case 3 :
        console.log("Você selecionou a terceira opção")
        break;
        
    default:
    console.log("Número inválido") 
}