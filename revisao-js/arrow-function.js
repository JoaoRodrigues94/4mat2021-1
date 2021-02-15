// No JS existe a função Math.pow() que faz isso.
function quadrado (x){
    return x * x
}

// Características da função acima:
// 1) Tem apenas um parâmetro.
// 2) Tem apenas uma linha de códigco com return.

console.log(quadrado(7))

// Uma função com essas características pode ser escrita de forma abreviada
// da seguinte forma, com arrow function:
// 1) A palavra function foi substituida pelo sinal => depos do parâmetro
// 2) Os parênteses em torno do parâmetro foram omitidos
// 3) As chaves foram omitidas
// 4) A palavra return foi omitido
let quadrado2 = x => x * x

console.log(quadrado2(7))

// função com dois parâmetros. 
function potencia(b,e){ // b = base, e = expente
        return b ** e
}

console.log(potencia(2,5))

// No formato arrow function, quando há mais de um parâmetro, os
// parênteses em volta deles retornam
let potencia2 = (b,e) => b ** e

console.log(potencia2(2,5))