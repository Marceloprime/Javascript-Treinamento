/**
17)​ Um funcionário irá receber um aumento de acordo com o seu plano detrabalho, 
de acordo com a tabela abaixo:
PlanoAumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seunovo salário. 
Use a estrutura switch e faça um caso default que indique que o plano é inválido 

 */

const { parse } = require('path');
const prompt = require('prompt');

prompt.start();

prompt.get(['Plano','Salario'], function (err, result) {
    if (err) { 
        //erro na entrada
        return onErr(err)
    }

    function fruitStore(plano, Salario){
        switch (plano) {
            case 'A':
                console.log(Salario+(Salario * 0.10))
                break;
            case 'B':
                console.log(Salario+(Salario * 0.15))
                break;
            case 'C':
                console.log(Salario+(Salario * 0.20))
                break;
            default:
                console.log("Não trabalhamos com este tipo de automóvel aqui")
                break;
        }
    }
    fruitStore(result.Plano,parseInt(result.Salario))
});

function onErr(err) {
    console.log(err);
    return 1;
}