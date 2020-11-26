/**
 * 10)​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne trueou false.
 */

let number = 5

function divisivel_por_3(number){
    if(number%3 === 0){
        console.log('Divisivel')
    }
    else{
        console.log('Não divisivel')
    }
}

divisivel_por_3(number)