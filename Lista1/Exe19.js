/**
19)​O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100    Cachorro Quente     R$ 3,00
200    Hambúrguer Simples  R$ 4,00
300    Cheeseburguer       R$ 5,50
400    Bauru               R$ 7,50
500    Refrigerante        R$ 3,50
600    Suco                R$ 2,80
Implemente uma  função que receba como parâmetros o código do item pedido,
a quantidade e calcule o valora ser pago por aquele lanche. 
Considere que a cada execução somente será calculado um item. 
Use ocomando switch. Crie um caso default para produto não existente.
 */

const prompt = require('prompt');

prompt.start();

console.log('Código Descrição do Produto Preço')
console.log('100    Cachorro Quente     R$ 3,00')
console.log('200    Hambúrguer Simples  R$ 4,00')
console.log('300    Cheeseburguer       R$ 5,50')
console.log('400    Bauru               R$ 7,50')
console.log('500    Refrigerante        R$ 3,50')
console.log('600    Suco                R$ 2,80')

prompt.get(['codigo','qtd'], function (err, result) {
    if (err) { 
        //erro na entrada
        return onErr(err)
    }

    function pedido(codigo,qtd){
        switch (codigo) {
            case '100':
                console.log(qtd*3.00)
                break;
            case '200':
                console.log(qtd*4.00)
                break;
            case '300':
                console.log(qtd*5.50)
                break;
            case '400':
                console.log(qtd*7.50)
                break;
            case '500':
                console.log(qtd*3.50)
                break;
            case '600':
                console.log(qtd*3.80)
                break;
            default:
                console.log("Código invalido")
                break;
        }
    }
    pedido(result.codigo,parseInt(result.qtd))
});

function onErr(err) {
    console.log(err);
    return 1;
} 