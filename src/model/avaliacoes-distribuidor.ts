export class AvaliacoesDistribuidor {

    constructor() {
    }

    quantidade: number;
    total: number;

    getMedia() {
        return this.quantidade ? this.total / this.quantidade : null;
    }

}