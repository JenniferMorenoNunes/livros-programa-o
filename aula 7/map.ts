

const numeros =[1,2,3,4,5];

const dobro = numeros.map(n => n * 2);
const string: string[] = numeros.map(n => `numero ${n}`);
console.log(string);

type produto = { id: Number, nome : string, preco:number}
const produto: produto[] = [{id:1, nome: `Mouse`, preco:50},
    {id:2, nome:`casa`, preco:40}
];
const nomes: string[] = produto.map(p => p.nome);

const listaFormatada = produto.map(p => ({ 
    id: p.id, label: `${p.nome} - R$ ${ p.preco.toFixed(2)}`, 
disponivel : true
}))

console.log(listaFormatada)