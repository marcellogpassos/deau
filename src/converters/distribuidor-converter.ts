import { Injectable } from "@angular/core";

import { Distribuidor } from "../model/distribuidor";
import { Converter } from "./converter";

@Injectable()
export class DistribuidorConverter implements Converter<Distribuidor> {

    constructor() {
        
    }

    convert(dados: any, uid?: string): Distribuidor {
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

    convertList(dados: any): Distribuidor[] {
        let distribuidores: Distribuidor[] = [];
        let keys = Object.keys(dados);
        keys.forEach(uid => distribuidores.push(this.convert(dados[uid], uid)));
        return distribuidores;
    }

}