
var primeiro_numero = parseFloat(prompt("Digite um valor: "));
var segundo_numero = parseFloat(prompt("Digite um valor: "));
var funcao = prompt("Função (+,-,*,/)");
var resultado;

if (funcao === '+') {
    resultado = primeiro_numero + segundo_numero;
    console.log(resultado)
} else if (funcao === '-') {
    resultado = primeiro_numero - segundo_numero;
    console.log(resultado)
} else if (funcao === '*') {
    resultado = primeiro_numero * segundo_numero;
    console.log(resultado)
} else if (funcao === '/') {
    resultado = primeiro_numero / segundo_numero;
    console.log(resultado);
}

