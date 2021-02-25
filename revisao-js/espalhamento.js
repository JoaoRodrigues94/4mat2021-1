console.log(Math.min(20,3,47,33,41)) // Retornar o menor número da lista.
console.log(Math.max(20,3,47,33,41)) // Retornar o maior número da lista.

let numeros = [20,3,47,33,41]

// Fazendo o espalhamento do vetor para conseguir os parâmentros soltos
console.log(Math.min(...numeros)) // Retornar o menor número da lista.
console.log(Math.max(...numeros)) // Retornar o maior número da lista.

// Primeira tentativa de fazer um vetor que inclui os elementos de outro vetor.
let maisNumeros = [19,7,38,numeros,0,-5]
console.log(maisNumeros)

// Usar o espalhamento (spread)
maisNumeros = [19,7,38,...numeros,0,-5]
console.log(maisNumeros)

// Usando espalhamento em parâmetros de função(parâmentro de resto)
function somaTudo(...nums){ // ... significa que não há quantidade fixa de parâmetro.
    let soma = 0
    // O parâmetro de resto, dentro de uma função é interpretado como um vetor.
    for(let n of nums) soma += n
    return soma
}

console.log(somaTudo(14,56,78,0,-4,41)) // Quantidade de números é aleatória.
console.log(somaTudo(25,-7,14))

// Usando parâmetro de resto após um argumento obrigatório
function calcular(operacao, ...nums){
    let res
    switch(operacao) {
        case '+':
            res = 0
            for(let n of nums) res += n
            break
        case '*':
            res = 1
            for(let n of nums) res *= n
            break
    }
    return res
}

// Caso seja passado um operador inválido será retornado um undefined.
console.log(calcular('+', 15,19,12,32,-7,6))
console.log(calcular('*', 15,19,12,32,-7,6))
console.log(calcular('-', 15,19,12,32,-7,6))


// Como chamar a função somaTudo() passando a ela os números do vetor maisNumeros?
console.log(somaTudo(...maisNumeros))

// Chamando calcular de forma semelhante
console.log(calcular('+', ...maisNumeros))

//let periodo
function controle(periodo){
    switch(periodo){
        case 1:
            periodo = "manhã"
            break
        case 2:
            periodo = "tarde"
            break
        case 3:
            periodo = "noite"
            break
    }
    return periodo
}

let med = 0
let vet = []
for(let i = 1; i <= 3; i++) {
    const periodo = controle(i)
    const val = Math.floor(Math.random() * 500 + 1)
    console.log(periodo + ": " + val)

    med += val 
    vet[i-1] = val
}
media = (med / 3).toFixed(0)

console.log("Média: " + media)
console.log("Maior valor: " + Math.max(...vet))
console.log("Menor valor: " + Math.min(...vet))