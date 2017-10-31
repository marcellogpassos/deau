import { Injectable } from "@angular/core";

import { Distribuidor } from "../model/distribuidor";
import { Converter } from "./converter";
import { ListConverter } from "./list-converter";

@Injectable()
export class DistribuidorConverter extends ListConverter<Distribuidor>  implements Converter<Distribuidor> {

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

}