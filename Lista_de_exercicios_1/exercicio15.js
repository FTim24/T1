
console.log("Sequência de Fibonacci - primeiros 10 termos");

let a = 1
let b =0



for (let i = 1; i <= 10; i++) {
  let proximo = a+b
   console.log(proximo)

   a = b // // O valor atual de 'b' se torna o anterior (a)
   b = proximo // // O próximo se torna o atual (b)
  


} 