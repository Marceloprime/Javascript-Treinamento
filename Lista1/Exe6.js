/**
 * 
 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

const regime_de_juros_compostos = (capital, tempo , taxa) =>{
    let montante = capital * Math.pow((1 + taxa), tempo)
    return montante
}

const regime_de_juros_simples = (capital, tempo , taxa) =>{
    let montante = capital * taxa * tempo
    return montante
}

let capital = 500
let tempo = 4 //meses
let taxa = 0.34

console.log('Capital: ' + capital)
console.log('Tempo: ' + tempo)
console.log('Taxa: ' + taxa)
console.log('Juros Simples: ' +  regime_de_juros_simples(capital,tempo,taxa))
console.log('Juros Compostos: ' +  regime_de_juros_compostos(capital,tempo,taxa))