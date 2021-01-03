/**

16)​ Utilizando a estrutura do Switch faça um programa que simule uma 
calculadora básicaO programa recebecomo parâmetros dois valores numéricos e 
uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. 
Por exemplo: calculadora (2, ‘+’, 3). 
A função efetuará a soma de 2 e3. 
Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  
Crie um caso default para operações inválidas.
 */

const prompt = require('prompt');

prompt.start();

prompt.get(['number1','operador','number2'], function (err, result) {
    if (err) { 
        //erro na entrada
        return onErr(err)
    }

    function calculadora(number1,operador,number2){
        switch (operador) {
            case '+':
                console.log(number1+number2)
                break;
            case '-':
                console.log(number1-number2)
                break;
            case '/':
                console.log(number1/number2)
                break;
            case '*':
                console.log(number1*number2)
                break;
            default:
                console.log("Entrada invalida")
                break;
        }
    }
    calculadora(parseInt(result.number1),result.operador,parseInt(result.number2))
});

function onErr(err) {
    console.log(err);
    return 1;
}