import { Endereco } from "./Endereco";
import { Contato } from "./Contato";       

 export class Pessoa {
    nome: string;
    idade: number;
    endereco: Endereco;
    contato: Contato;

    constructor(nome: string, idade: number, endereco: Endereco, contato: Contato){
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.contato = contato;
        
    }
}