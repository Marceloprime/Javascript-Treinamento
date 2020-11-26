/**
04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
 */

let valor1 = 2
let valor2 = 5
let resultadoReal
let resto

function divisao(valor1, valor2) {
    resultadoReal = valor1 / valor2
    console.log(resultadoReal)
    resto =  valor1 % valor2
    console.log(resto)
}

divisao(valor1, valor2)