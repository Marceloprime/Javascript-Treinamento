/**
14)​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta 
e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. 
Caso kiwi, retorne: “Estamos comescassez de kiwis”. Caso melancia, retorne: “Aqui está, 
são 3 reais o quilo”. Teste com estas três opções .Crie também um default, 
que retornará uma mensagem de erro no console. 
 */

const prompt = require('prompt');

prompt.start();

prompt.get(['fruta'], function (err, result) {
    if (err) { 
        //erro na entrada
        return onErr(err)
    }

    function fruitStore(fruta){
        switch (fruta) {
            case 'maçã':
                console.log("Não vendemos esta fruta aqui")
                break;
            case 'kiwi':
                console.log("Estamos comescassez de kiwis")
                break;
            case 'melancia':
                console.log("Aqui está, são 3 reais o quilo")
                break;
            default:
                console.log("falha")
                break;
        }
    }
    fruitStore(result.fruta)
});

function onErr(err) {
    console.log(err);
    return 1;
}