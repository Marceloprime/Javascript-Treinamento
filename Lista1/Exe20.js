/**
20)​ Crie um programa para informar quais e quantas notas são necessárias 
para entregar o mínimo de cédulaspara um determinado valor 
informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. 
Por exemplo, ao solicitar R$18, o programa deveinformar apenas a 
seguinte informação (note que não foram exibidas 
informações sobre as demais cédulas): 
1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. 

 */

const prompt = require('prompt');

prompt.start();

prompt.get(['valor'], function (err, result) {
    if (err) { 
        //erro na entrada
        return onErr(err)
    }

    function troco(valor){
        console.log("Nota de R$ 100,00: " + parseInt(valor/100))
        valor = valor%100
        console.log("Nota de R$ 50,00: " + parseInt(valor/50))
        valor = valor%50
        console.log("Nota de R$ 20,00: " + parseInt(valor/20))
        valor = valor%20
        console.log("Nota de R$ 10,00: " + parseInt(valor/10))
        valor = valor%10
        console.log("Nota de R$ 5,00: " + parseInt(valor/5))
        valor = valor%5
        console.log("Nota de R$ 2,00: " + parseInt(valor/2))
        valor = valor%2
        console.log("Nota de R$ 1,00: " + parseInt(valor/1))
        valor = valor%1
    }

    troco(parseInt(result.valor))
});

function onErr(err) {
    console.log(err);
    return 1;
} 