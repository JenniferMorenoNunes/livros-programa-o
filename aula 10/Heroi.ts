type Categoria = "Espadachim " | "Mago " | "Arqueiro";


export class Heroi {
    nome: string;
    categoria: Categoria;
    ataque: number;
    custo: number;
    recurso: number;

    constructor(nome: string, categoria: Categoria, ataque: number, custo: number, recurso: number){
        this.nome = nome;
        this.categoria = categoria;
        this.ataque = ataque;
        this.custo = custo;
        this.recurso = recurso;

        if (categoria == "Espadachim "){
            this.recurso = 50;
        }

        else if (categoria == "Mago "){
            this.recurso = 40;
        }
 
        else 
            this.recurso = 10;
        }
    

    Ataque(){
        if(this.recurso >= this.custo){
            this.recurso = this.recurso - this.custo;
            console.log(`Ataque ${this.nome} foi concluido, restam ${this.recurso} stamina`)
        }

        else{
            console.log(`Ataque ${this.nome} nao foi concluido por falta de recurso`)
        }

    }
}