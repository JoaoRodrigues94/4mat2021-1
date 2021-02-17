// Importando módulos ES6

// Quando o item é exportado com *export* na importação deve-se usar as chaves (desestruturação)
// o . significado que estamos no arquivo atual.
// a barra '/' significa alocalização.
import { numeros } from './Includes/dados.mjs'

//NA importação, pode-se trazer apenas aquilo que será usado
import {quadradoVet } from './Includes/func1.mjs'

// Quando o arquivo exporta algo com *export default*, o import Não usa chaves
import dobraVet from './Includes/func2.mjs'

//console.log(somaVet(numeros))
console.log(quadradoVet(numeros))
console.log(dobraVet(numeros))