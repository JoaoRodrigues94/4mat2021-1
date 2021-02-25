let numeros = [10,20,30] // vetor
let carro = {
    marca: 'Volksvagen',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'preto'
} // Objeto.

// Desestruturação de vetor:
let [x,y,z] = numeros
console.log(x)
console.log(y)
console.log(z)

// Desestruturação parcial do vetor
// Pegar apenas o segundo valor
let[, c,] = numeros
console.log(c)

// pegando apenas os dois primeiros valores
let[a,b] = numeros
console.log(a)
console.log(b)
console.log("-------------------------------------")

// Desestruturação de objetos: o nome das variáveis deser ser IGUAL ao nome
// das propriedades do objeto. A ordem das variáveis
// é indiferente
/*
let {ano, modelo, cor, marca} = carro
console.log(marca)
console.log(modelo)
console.log(cor)
console.log(marca) */

/*
Desestruturação parcial: basta passar apenas o nome das propriedades desejadas.
*/ 

let{marca, ano} = carro
console.log(marca)
console.log(ano)

// Renomeando
let{marca: brand, ano: year} = carro
console.log(brand)
console.log(year)