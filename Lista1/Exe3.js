/*
03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

let base = 18
let expoente = 5

function potencializacao(base, expoente) {
    let cont
    let res = base
    for(cont = 0; cont < expoente;cont++){
        res = res * base
    }

    console.log(res)
}

potencializacao(base, expoente)