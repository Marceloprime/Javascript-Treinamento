/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

let valor1 = 2
let valor2 = 3

function operacoes(valor1, valor2){
    console.log(valor1 + '+' + valor2 + ':')
    console.log(valor1 + valor2)
    console.log('\n')
    console.log(valor1 + '-' + valor2 + ':')
    console.log(valor1 - valor2)
    console.log('\n')
    console.log(valor1 + '*' + valor2 + ':')
    console.log(valor1 * valor2)
    console.log('\n')
    console.log(valor1 + '/' + valor2 + ':')
    console.log(valor1 / valor2)
    console.log('\n')
}

operacoes(valor1, valor2)