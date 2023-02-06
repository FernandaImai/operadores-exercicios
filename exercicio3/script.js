const op1 = 5 > 20 && 5 < 2
console.log(`5 é maior que 20 e também é menor que 2: -${op1}`)

const op2 = 5 === 5 || 5 === "5"
console.log(`5 é igual a 5 ou é igual a “5”: -${op2}`)

const op3 = !(20 > 50)
console.log(`negação de (vinte é maior que cinquenta): -${op3}`)

const op4 = !(20 > 50 || 50 > 60)
console.log(`negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta): -${op4}`)

const salario = 2000
const auxCreche = 45.50 * 2

let conta1 = salario + auxCreche

let conta2 = 0.1 * 5784.50

let conta3 = (salario + conta2) * 0.05

let vendJaneiro = 5784.50
let vendFevereiro = 3418.41
let vendMarco = 4124.10
let vendAbril = 1874
let vendMaio = 7000
let vendJunho = 9450

let salarioJan = (conta1 + (0.1 * vendJaneiro))* 0.95
let salarioFev = (conta1 +(0.1* vendFevereiro))* 0.95
let salarioMar = (conta1 + (0.1* vendMarco))* 0.95
let salarioAbril = (conta1+ (0.1* vendAbril))* 0.95
let salarioMaio = (conta1+ (0.1*vendMaio))*0.95
let salarioJun = (conta1 + (0.1* vendJunho))*0.95

console.log(`O salário de janeiro será: ${salarioJan}
O salário de fevereiro será: ${salarioFev}
O salário de março será: ${salarioMar}
O salário de abril será: ${salarioAbril}
O salário de maio será: ${salarioMaio}
O salário de junho será: ${salarioJun}`)

let media = (salarioJan + salarioFev + salarioMar + salarioAbril + salarioMaio + salarioJun)/6

console.log(`A média salarial será de: ${media}`)

