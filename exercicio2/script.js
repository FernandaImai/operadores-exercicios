let numero1 = Number(prompt('Digite um número:'))
let numero2 = Number(prompt('Digite outro número:'))

let op1 = numero1 > numero2

console.log(`Primeiro número maior que o segundo? -${op1}`)

let op2 = numero1 === numero2

console.log(`Primeiro número igual ao segundo? -${op2}`)

let op3 = (numero1 % numero2) === 0
console.log(`Primeiro número é divisivel pelo segundo? -${op3}`)


let op4 = (numero2 % numero1) === 0
console.log(`Segundo número é divisivel pelo primeiro? ${op4}`)
