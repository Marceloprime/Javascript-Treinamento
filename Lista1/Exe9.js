/**
09)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política declassificação: 
Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. 
As notas possuem a seguinte regra de arredondamento: 
Se a diferença entre a nota e o próximo múltiplo de 5 for menorque 3, arredondar a nota para esse próximo múltiplo de 5. 
Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ouseja, que evite a reprovação do aluno.
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
 */

function arrendotamento_de_notas(nota){
    if(nota < 0 || nota > 100){
        console.log('Nota invalida')
    }
    else if(nota < 38){
        console.log('So lamento')
    }
    else if(nota%5  < 3){
        console.log('passou')
        for(let i=0;i < 3;i++){
            nota++
            if(nota%5 === 0){
                console.log(nota)
                break;
            }
        }
    }
    else{
        console.log('Passou')
    }
}

let nota = 38
arrendotamento_de_notas(nota)