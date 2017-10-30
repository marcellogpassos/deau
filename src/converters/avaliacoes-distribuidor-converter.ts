import { Injectable } from "@angular/core";

import { AvaliacoesDistribuidor } from "../model/avaliacoes-distribuidor";

@Injectable()
export class AvaliacoesDistribuidorConverter {

    constructor() {

    }

    converterAvaliacoesDistribuidor(dados: any): AvaliacoesDistribuidor {
        let avaliacoes: AvaliacoesDistribuidor = new AvaliacoesDistribuidor();
        avaliacoes.quantidade = dados.quantidade;
        avaliacoes.total = dados.total;
        return avaliacoes;
    }

}