const numeros: number[] = [1,2,3,4,5,6,7,8,1,2];
const semDuplicado = numeros.filter ((valor, indice, self)=> {
    return self.indexOf(valor) === indice;
});

let pares = numeros.filter (n => n% 2 ===0 );

let maioQueTres = numeros.filter (a => a > 3);

let valores =[10,20,78,null];

let valorNaoNulo = valores.filter ( v=> v !== null && v!== undefined);

type  pessoa = {
    nome: string;
    idade : number; 
}

const pessoas : pessoa[] = [
    { nome: "nanda", idade: 10},
    { nome: "carla", idade: 40},
    { nome: "bia", idade: 98},
    { nome: "anisio", idade: 100},

]
console.log(pessoas)
let maiorIdade = pessoas.filter (pessoa => pessoa.idade >=18);

console.log(maiorIdade)

