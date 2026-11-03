const nome = 'Ikaro';
const sobrenome = 'Vieira';
const idade = 22;
const peso = 84;
const alturaEmM = 1.7;
let imc;
let anoDeNacimento;

imc = peso / (alturaEmM * alturaEmM);
anoDeNacimento = 2026 - idade;

//template strings

console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoDeNacimento}.`);

