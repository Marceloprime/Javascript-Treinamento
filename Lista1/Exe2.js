/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

let h  = 4 //hipotenusa
let ca = 2 // cateto adjacente
let co = 2// cateto oposto

function classificar_triangulo(h, ca, co){
    if(h === ca && h === co){
        console.log('Equilátero')
    }
    else if(h === ca || h === co || ca === co){
        console.log('Isósceles')
    }
    else if(h !== ca && h !== co && ca !== co){
        console.log('Escaleno')
    }
}

classificar_triangulo(h, ca, co)