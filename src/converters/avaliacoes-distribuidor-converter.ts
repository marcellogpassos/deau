import { Injectable } from "@angular/core";

import { AvaliacoesDistribuidor } from "../model/avaliacoes-distribuidor";
import { Converter } from "./converter";

@Injectable()
export class AvaliacoesDistribuidorConverter implements Converter<AvaliacoesDistribuidor>{
    
    convert(dados: any, uid?: string): AvaliacoesDistribuidor {
        let avaliacoes: AvaliacoesDistribuidor = new AvaliacoesDistribuidor();
        avaliacoes.quantidade = dados.quantidade;
        avaliacoes.total = dados.total;
        return avaliacoes;
    }

    convertList(dados: any): AvaliacoesDistribuidor[] {
        throw new Error("Method not implemented.");
    }

}