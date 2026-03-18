
function imprimir(valor: any):void{
    console.log ("a operação efetuada resultou em: "+ valor);
}


function concatenar(a: string, b: string, callback:(param:string)=>void): void {
    var op = a + "" + b;
    callback(op);
    
}

function somar (a: number, b:number, callback:(param:number)=>void):void{
    var op = a + b;
    callback(op);
}
console.log
concatenar("hello", "world", imprimir)

somar(2,5,imprimir)