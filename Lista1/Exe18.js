/**
18)​ Faça um programa que leia um número entre 0 e 10, 
e escreva este número por extenso. Use o comando switch. 
Crie um case default que escreva ‘Número fora do intervalo.’
 */

const prompt = require('prompt');

prompt.start();

prompt.get(['number'], function (err, result) {
    if (err) { 
        //erro na entrada
        return onErr(err)
    }

    function fruitStore(number){
        switch (number) {
            case '1':
                console.log("Um")
                break;
            case '2':
                console.log("Dois")
                break;
            case '3':
                console.log("Três")
                break;
            case '4':
                console.log("Quatro")
                break;
            case '5':
                console.log("Cinco")
                break;
            case '6':
                console.log("Seis")
                break;
            case '7':
                console.log("Sete")
                break;
            case '8':
                console.log("Oito")
                break;
            case '9':
                console.log("Nove")
                break;
            case '10':
                console.log("Dez")
                break;
            default:
                console.log("Número fora do intervalo.")
                break;
        }
    }
    fruitStore(result.number)
});

function onErr(err) {
    console.log(err);
    return 1;
}