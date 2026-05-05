import { pacote } from "./pacote";
export class voo{
    id: string;
    data_envio: string;
    altitude_max: number;
    sensores : string[];
    listaPacotes: pacote[];

    constructor(dados: any){
      this.id = dados.id_voo;
      this.data_envio = dados.data_envio;   
      this.altitude_max = dados.detalhes.altitude_max;
      this.sensores = dados.detalhes.sensores;

      this.listaPacotes = dados.pacotes.map((item: any) => {
        return new pacote(item.peso, item.descricao);
      })
      
    }
      getPesoTotal(): number {
        let total = 0;
        for (const pacote of this.listaPacotes) {
            total += pacote.peso;
        }
        return total;
    }
   

}