var valor_01 = parseFloat(prompt('Digite a primeira nota'));
var valor_02 = parseFloat(prompt('Digite a segunda nota'));
var valor_03 = parseFloat(prompt('Digite a terceira nota'));

resultado = (valor_01+valor_02+valor_03) / 3


if (resultado >=7) {
    console.log ('Aprovado')    
} else {
    console.log ('Reprovado')
}
