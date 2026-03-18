console.log("antes do setTimeOut");

let frase ="rodando timeout";

const timeout = setTimeout(() => console.log("executanto o timeOut"),2000);

frase =  "rodando o clear";


if(frase !== "rodando o set interval"){
    clearTimeout(timeout);
    console.log(frase);
}
console.log("dps do setTimeOut")