// Quando o módulo exporta apenas um item, pode-se utilizar export default.

// Só pode existi um export por arquivo de módulo.

export default function dobraVet(vet){
    // Cria um novo vetor cujos elementos equivalem ao dobro 
    // dos elementos do vetor original
    let res = []
    for (let n of vet) res.push(n*2)
    return res
}