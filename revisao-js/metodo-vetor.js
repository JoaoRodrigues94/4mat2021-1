const pets = [
    {
        nome: 'Teste',
        especie: 'cachorro',
        idade: 10,
        sexo: 'F',
        peso: 12.5
    },
    {
        nome: 'Mingau',
        especie: 'gato',
        idade: 4,
        sexo: 'M',
        peso: 2.5
    },
    {
        nome: 'Jady',
        especie: 'cachorro',
        idade: 10,
        sexo: 'f',
        peso: 10.5
    },
    {
        nome: 'Mel',
        especie: 'pardal',
        idade: 1,
        sexo: 'f',
        peso: 1.5
    },
]

// find(): retorna a primeira ocorrência que corresponda ao critério informado
// Retorna undefined quando não encontra nenhum elemento coincidente.
console.log(pets.find(elemento => elemento.peso >10))
console.log(pets.find(x => x.idade < 4))
console.log(pets.find(x => x.sexo === 'f' && x.peso === 1.5))
console.log(pets.find(x => x.especie === 'calopsita'))

console.log('-----------------------------------------------')
// some(): retorna true caso haja ALGUM elemento que corresponda ao critério
// ou false caso contrário.
console.log(pets.some(x => x.nome === 'Jady'))
console.log(pets.some(x => x.idade === 35))

console.log('-----------------------------------------------')
// every(): retorna true caso TODOS os elementos correspondam ao critério
// ou false caso contrário
console.log(pets.every(x => x.especie === "cachorro"))
console.log(pets.every(x => x.peso > 1))

console.log('-----------------------------------------------')

// filter(): retorna um novo vetor contendo apenas os elementos que
// correspondem ao critério passado.
// Caso não seja encontrado retorna um vetor vazio
console.log(pets.filter(x => x.especie === 'cachorro'))
console.log(pets.filter(x => x.idade > 20))

console.log('-----------------------------------------------')

// map(): cria um novo vetor COM MESMO NÚMERO DE ELEMENTOS do vetor original,
// correspondendo a algum tipo de transformação nos elementos originais.

// Novo vetor contendo apenas o nome dos pets, em maiúsculas.
console.log(pets.map(e => e.nome.toUpperCase()))

const numeros = [2,6,-3,9,5,-7,1,4]
console.log(numeros)

// Criando um novo vetor em que cada elemento corresponde ao elemento do 
// vetor original elevado ao quadrado.
console.log(numeros.map(x => x ** 2))

console.log('-----------------------------------------------')

// reduce(): reduz um vetor de valores a um único valor.
// Parâmetros:
// acumulador: resultado parcial até o momento
// valor atual: o resultado correspondente ao elemento atual, que
// integrará o acumulador.

// Soma
console.log(numeros.reduce((acm, val) => acm + val))

// Multiplicação
console.log(numeros.reduce((acm, val) => acm * val))

// Concatenação
let p1 = 'Bom '
let p3 = 'galera'
console.log([p1, 'dia, ', p3].reduce((a,b) => a + b))
console.log('-----------------------------------------------')

/**
 * SOMAR O PESO DE TODOS OS PETS
 */

 // Abordagem 1: criando um vetor auxiliar contendo apenas os pesos dos pets
 let pesos = pets.map(x => x.peso)
 console.log(pesos)

 console.log(pesos.reduce((x,y) => x + y))

 // Abordagem 2: fazendo o map() + reduce e uma linha só
 console.log(pets.map(p => p.peso).reduce((x,y) => x + y))

 // Abordagem 3: reduce() com parâmetros extras
 // 2° parâmetro do reduce(): valor inicial do acumulador.
 console.log(pets.reduce((acm, val) => acm + val.peso, 0))

 console.log('-----------------------------------------------')

 // includes(): retorna true caso o valor inclua o valor informado
 console.log(numeros.includes(6))
 console.log(numeros.includes(11))

 // Diferença de some() e includes()
 // some() -> recebe uma função para testar a existência de uma condição
 // includes() -> recebe um valor simples para testar a existência