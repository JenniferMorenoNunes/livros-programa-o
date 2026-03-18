//setInterval(()=>console.log("executanto o interval"), 1000);
//console.log("depois do interval");
let contador =0;
const interval= setInterval(() => {
    contador++;
    console.log("rodando o interval");
    if (contador ===3){
        console.log("interval cancelado");
        clearInterval(interval);
    }
        

},700);

console.log("depois do intervalo")