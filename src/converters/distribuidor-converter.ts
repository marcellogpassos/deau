import { Injectable } from "@angular/core";

import { Distribuidor } from "../model/distribuidor";

@Injectable()
export class DistribuidorConverter {

    constructor() {
        
    }

    converterListaDistribuidores(dados: any): Distribuidor[] {
        let distribuidores: Distribuidor[] = [];
        let keys = Object.keys(dados);
        keys.forEach(uid => distribuidores.push(this.converterDistribuidor(uid, dados[uid])));
        return distribuidores;
    }

    converterDistribuidor(uid: string, dados: any): Distribuidor {
        let distribuidor: Distribuidor = new Distribuidor();
        distribuidor.uid = uid;
        distribuidor.nomeFantasia = dados.nomeFantasia;
        distribuidor.razaoSocial = dados.razaoSocial;
        distribuidor.cnpj = dados.cnpj;
        distribuidor.dataCadastro = dados.dataCadastro;
        distribuidor.dataAtualizacao = dados.dataAtualizacao;
        distribuidor.imagemPequena = dados.imagemPequena;
        distribuidor.imagemGrande = dados.imagemGrande;
        distribuidor.email = dados.email;
        distribuidor.telefone = dados.telefone;
        distribuidor.gasCozinha = dados.gasCozinha;
        distribuidor.aguaMineral = dados.aguaMineral;
        return distribuidor;
    }

}