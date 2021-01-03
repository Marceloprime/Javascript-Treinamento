/**
13)​Crie um programa que exibe se um dia é dia útil, 
fim de semana ou dia inválido dado o número referente a o dia. 
Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

const prompt = require('prompt');

prompt.start();

console.log("São apenas aceitas as seguintes entradas: Segunda, Terça, Quarta, Quinta, Sexta, Sabado, Domingo")

prompt.get(['dia'], function (err, result) {
    if (err) { 
        //erro na entrada
        return onErr(err)
    }

    function diaUtil(dia){
        switch (dia) {
            case 'Segunda':
                console.log("É dia util")
                break;
            case 'Terça':
                console.log("É dia util")
                break;
            case 'Quarta':
                console.log("É dia util")
                break;
            case 'Quinta':
                console.log("É dia util")
                break;
            case 'Sexta':
                console.log("É dia util")
                break;
            case 'Sabado':
                console.log("Não é dia util")
                break;
            case 'Domingo':
                console.log("Não é dia util")
                break;
            default:
                console.log("Entrada invalida")
                break;
        }
    }
    diaUtil(result.dia)
});

function onErr(err) {
    console.log(err);
    return 1;
}