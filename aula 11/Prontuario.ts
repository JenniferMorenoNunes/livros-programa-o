import { Paciente } from "./Paciente";
import { Medico } from "./Medico";
class Prontuario{
    paciente : Paciente;
    medico : Medico;

    constructor (paciente : Paciente, medico : Medico){
        this.paciente = paciente;
        this.medico = medico;
    }
}

ExibirDados(){

    console.log(`o nome do paciente eh ${this.paciente.nome} e o nome do medico ${this.medico.nome}`)
}