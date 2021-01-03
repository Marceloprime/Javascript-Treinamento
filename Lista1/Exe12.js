/**
 * 12)​ Faça um algoritmo que calcule o fatorial de um número
 * 
 */

const prompt = require('prompt');

prompt.start();

prompt.get(['number'], function (err, result) {
    if (err) { 
        //erro na entrada
        return onErr(err)
    }

    function fatorial(number){
        result = 1
        for(let i = number;i > 0; i--){
            result = result * i
        }
        return console.log(result)
    }

    fatorial(parseInt(result.number))
});

function onErr(err) {
    console.log(err);
    return 1;
}