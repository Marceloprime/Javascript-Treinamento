/**
 * 07)​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
 *  Dito isto,elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
 *  Para isso, sua função deve receber trêsparâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. 
 * Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. 
 * Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:“Delta é negativo”.
 */

 let a = 3
 let b = -2
 let c = -8
 let solucao = []

 function equacao_do_segundo_grau(a,b,c){
    let delta = Math.pow(b,2) - (4 * a * c)

    if(delta < 0){
        console.log('Delta negativo:' +  delta)
    }
    else{
        solucao[0] = (-1*(b) + Math.sqrt(delta))/(2*a)
        solucao[1] = (-1*(b) - Math.sqrt(delta))/(2*a)
        console.log(solucao)
    }
 }

 equacao_do_segundo_grau(a,b,c)