/*
11)​As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, 
imprimindo no console amensagem e retornando  true ou false.
*/

const prompt = require('prompt');

prompt.start();

prompt.get(['ano'], function (err, result) {
    if (err) { 
        //erro na entrada
        return onErr(err)
    }

    function bissexto(ano){
        if(ano % 400 === 0){
            return console.log('é ano bissexto')
        }
        if(ano % 100 === 0){
            return console.log('não é ano bissexto')
        }
        if(ano % 4 === 0){
            return console.log('é ano bissexto')
        }
        else{
            return console.log('não é ano bissexto')
        }
    }

    bissexto(parseInt(result.ano))
});

function onErr(err) {
    console.log(err);
    return 1;
}