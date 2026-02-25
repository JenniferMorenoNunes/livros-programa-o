let nomes: string[] = ["ana", "joao", "elvis"];
console.log(nomes);

let numeros: number[] = [1,2,2,4];
console.log("numeros pos 1: ", numeros[1])
console.log(nomes.indexOf("joão"));

nomes.splice(0,1);
console.log("depois do splice: ", nomes);

let years: Array<number> = [20,30,40]; 

let fruits: string[] = ["banana",  "melao"]; 

fruits.push("pera"); //adiciona no final da lista

console.log(fruits);

fruits.unshift("uva");// adicione no comeco da lista

fruits.pop(); // remove o ultimo elemento
fruits.shift();// remove o primeiro elemento

console.log(fruits[0]);

console.log(fruits.length);
