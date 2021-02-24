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
// 1) A palavra function foi substituida pelo sinal => depois do parâmetro
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

// Função sem parâmetros
function megasena(){
    // Esta função retorn um número aleatório entre 1 e 60.
    //  Math.random() -> retorna um número aleatório entre 0(inclusive) e 1 (exclusive)
    // * 60 -> ajusta a faixa de valores para entre 0 e 59.
    // + 1 -> Ajusta a faixa de valores para entre 1 e 60.
    // Math.floor() -> retira a parte fracionária (casas decimais) do resultado.
    return Math.floor(Math.random() * 60 + 1)
}

console.log(megasena(),megasena(),megasena(),megasena(),megasena(),megasena())

// Em arrow function sem parâmetros, é necessário deixar um par vazio de parâmetros
// para marcar o lugar dos parâmetros.
const megasena2 = () => Math.floor(Math.random() * 60 + 1)

console.log(megasena(),megasena(),megasena(),megasena(),megasena(),megasena())

// Função com mais de uma linha de código
function somaTudo(...nums){ // ... significa que não há quantidade fixa de parâmetro.
    let soma = 0
    // O parâmetro de resto, dentro de uma função é interpretado como um vetor.
    for(let n of nums) soma += n
    return soma
}

console.log(somaTudo(1,2,3,4,5,6,7,8,9,10))

// Em arrow functions com mais de uma linha no corpo, as chaves retornam e
// também é necessário voltar a usar a palavra return para retornar um valor.

const somaTudo2 = (...nums) => {
    let soma = 0
    // O parâmetro de resto, dentro de uma função, é interpretado como um vetor
    for(let n of nums) soma += n
    return soma
}
console.log(somaTudo2(1,2,3,4,5,6,7,8,9))
// CONCLUSÃO: arrow function são ideais para quando uma função tem apenas uma
// ou poucas linhas de código no corpo.