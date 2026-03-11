//exercicio 1
function maiuscula(a: string):string{
    return a.toUpperCase();
}
console.log(maiuscula("Ola visitante"));

const maisculaLambda =(sms:string):string => sms.toUpperCase(); 
console.log(maisculaLambda("ola visitante, como vai?"))

//exercicio 2 elevar o numero

function elevar (a: number, b: number){
    return a**b;
}
console.log ("a funcao de 2 elevado a 2 é : ")
console.log(elevar(2,2));

const elevarLambda =(a:number, b:number):number => a ** b;
console.log ("a funcao lambda de 3 elevado a 3 é : ")
console.log (elevarLambda(3,3))

//exercicio 3 

function numero(numeros:number [] ) : number[]{
    const duplicados:number[] = []
    for (let i = 0; i < numeros.length; i++){ 
        duplicados.push(numeros[i] * 2)
    }

    return duplicados;
}
let numeros=[2,3,5]
console.log( "oi",numero(numeros))

//exercicio 4 