import { pacote } from "./pacote";

export class Voo {
    id: string;
    data_envio: string;
    detalhes: {
        altitude_max: number;
        sensores: string[];
    };
    pacotes: pacote[];

    constructor(pacotes: pacote[]) {
        this.id = "DRN-7742";
        this.data_envio = "2026-04-28";
        this.detalhes = {
            altitude_max: 120,
            sensores: ["GPS", "Termômetro", "Lidar"]
        };
        this.pacotes = pacotes;
    }

    getPesoTotal(): number {
        return this.pacotes.reduce((total, pacote) => total + pacote.peso, 0);
    }
}