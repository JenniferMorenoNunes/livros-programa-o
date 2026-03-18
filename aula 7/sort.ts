const numbers = [5,3,4];

numbers.sort((a,b) => a-b) // cresc
numbers.sort((b,a) => a-b) // cresc

console.log(numbers);
const arquivos: string[]= ["item10.png", "item1.png", "item9.png"];
arquivos.sort((a,b) => a.localeCompare(b)) ;
console.log(arquivos);

"anisio".localeCompare("ANISIO", undefined, {sensitivity: `base`});
"teste".toLocaleUpperCase().localeCompare("TESTE".toLocaleLowerCase());