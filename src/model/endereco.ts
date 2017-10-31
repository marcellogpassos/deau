import { Geolocalizacao } from "./geolocalizacao";

export class Endereco extends Geolocalizacao {

    cep: string;
    uf: string;
    municipio: string;
    ibge: string;
    bairro: string;
    logradouro: string;
    numero: string;
    complemento: string;

}