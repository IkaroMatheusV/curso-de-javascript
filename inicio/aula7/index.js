//não podemos usar palavras reservadas pela linguagem como constantes
//constantes presisam ter nomes significativos
//não podemos começar o nome de uma constante iniciando com um numero
//não podem conter espaços ou traços
//utilizamos camelCase
//case-sensitive (letras maiusculas e minusculas fazem diferença)
//não podemos modificar o valor de uma constante
//não ultilize VAR sempre ultilize CONST

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
//console.log(resultadoTriplicado)
console.log(typeof primeiroNumero)