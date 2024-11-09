
//Não se pode usar apenas o MathRandom sozinho, pois ele gera numeros aleatorios como pontos flutuantes.
const resultado = Math.floor(Math.random() * 5) + 1;  

do {
    numeroUsuario = parseInt(prompt('Digite o número: '));

    if (numeroUsuario > resultado) {
        console.log('O numero aléatorio é inferior ao número informado')
    } else if (numeroUsuario < resultado) {
        console.log('O numero aléatorio é superior ao número informado')
    } else {
        console.log('Número correto!')
    }
} while (numeroUsuario !== resultado)



