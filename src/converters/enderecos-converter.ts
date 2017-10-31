import { Injectable } from "@angular/core";

import { Endereco } from "../model/endereco";
import { Converter } from "./converter";

@Injectable()
export class EnderecosConverter implements Converter<Endereco> {

    convert(dados: any, uid?: string): Endereco {
        let endereco: Endereco = new Endereco();
        endereco.bairro = dados.bairro;
        endereco.cep = dados.cep;
        endereco.logradouro = dados.logradouro;
        endereco.numero = dados.numero;
        endereco.ibge = dados.codigoIbge;
        endereco.municipio = dados.municipio;
        endereco.uf = dados.uf;
        endereco.latitude = dados.latitude;
        endereco.longitude = dados.longitude;
        endereco.complemento = dados.complemento;
        return endereco;
    }

}