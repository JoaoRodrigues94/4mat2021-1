//Parêmetros opicionais devem ser sempre os últimos
 // forma como parâmetro predefinido ou opcional.
 // Regras:
 // 1) Parâmetros opcionais devem vir após os obrigatórios.
 // 2) Pode haver mais de um parâmetro opcional por função.
function calculaArea(base, altura, forma = 'Q', casasDec = 2){
    let res
    switch(forma){
        case 'Q': // Quadrado.
            res = base * altura
            break
        case 'T': // Triângulo
            res = base * altura / 2
            break
        case 'E': // Elipse
            res = (base /2) * ( altura/ 2) * Math.PI
        break
    }
    return res.toFixed(casasDec)
}
    console.log(calculaArea(2, 3, 'Q'))
    console.log(calculaArea(2, 3, 'T'))
    console.log(calculaArea(4.5, 4.5, 'E', 4))
    console.log(calculaArea(10, 13))
