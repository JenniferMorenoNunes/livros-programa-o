const numbers = [1,2,3,4,5];
const frutas: string[] = [`uva`, `pera`, `maça`];

frutas.forEach( (item , index) => {
    console.log(`${index}: ${item}`)
});

let contador: number = 0;
numbers.forEach( item => {
    contador += item;
});

numbers.forEach(( n, index) => {
    numbers[index] = n * 2;
});
type produto = {id: number; nome: string; preco : number}
const produto:produto[] = [
    {id:1, nome:`mouse`, preco:40},
    {id:2, nome:`casa`, preco:50}
];

produto.forEach(p => {
    p.nome = p.nome + "qualquer coisa"
});