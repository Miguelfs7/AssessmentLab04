//**var */

var nome = "João";
console.log(nome); // "João"

nome = "Maria";
console.log(nome); // "Maria"

let idade = 20;
console.log(idade); // 20

idade = 21;
console.log(idade); // 21

const PI = 3.14;
console.log(PI); // 3.14

//*Tipo de Dados**

// String
let frase = "Olá, Mundo!";
console.log(typeof frase); // "string"

let numero =  10;
console.log(typeof numero); // "number"

let verdadeiro  = true;
console.log(typeof verdadeiro); // "boolean"

let lista = ["banana", "maçã", "laranja"];
console.log(typeof lista); // "object"

let pessoa = {nome: "João", idade: 20 };
console.log(typeof pessoa); // "object"

let nulo = null;
console.log(typeof nulo); // "object"

let indefinido;
console.log(typeof indefinido); // "undefined"


//--------------------------------------------------------------------------------------------------------------------------------//

// 1. 

nome = "Mário";
console.log(nome); // "Mário"

// 2.
let localidade = "Covilhã"
console.log(localidade); // "string"

// 3.
//const PI = 3.14;
//console.log(PI); // As constantes não podem ser reatribuídas!

// 4.
let meuArray = ["texto", 2025, true, null, {chave: "valor"}];
meuArray.forEach(elemento => console.log(elemento));

// 5.
let women = {  //Escrevi person porque não se pode dar redeclare à mesma variável
    nome: "Ana",
    idade: 30,
    profissao: "Engenharia"
};

for (let chave in women) {
    console.log(`${chave}: ${women[chave]}`);
}



    




