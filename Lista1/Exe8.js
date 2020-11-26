/**
08)​Pedro joga N jogos de basquete por temporada. 
Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. 
Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. 
Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. 
(Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.Exemplo:String: “10 20 20 8 25 3 0 30 1”Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuaçãoaconteceu no sétimo jogo.
 */

function pontuacao(pontuacao){
    let recorde = 0
    let cont_recorde = 0
    let pior_resultado = pontuacao[0]
    let pior_jogo = 0
    for(let i = 0; i < pontuacao.length; i++){
        if(pontuacao[i] > recorde ){
            cont_recorde++
            recorde = pontuacao[i]
        }

        if(pontuacao[i] < pior_resultado){
            pior_jogo = i
            pior_resultado = pontuacao[i]
        }
    }
    console.log('Qtd Recorde: ' + cont_recorde)
    console.log('Pior Jogo: ' + (pior_jogo + 1))
}

let jogos = [10, 20, 20, 8, 25, 3, 0, 30, 1]
pontuacao(jogos)