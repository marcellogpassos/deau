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

    getDescricaoEnderecoPostal(): string {
        let descricao = this.logradouro + ", " + this.numero + (this.complemento ? ", " + this.complemento : "") + ". ";
        descricao += this.bairro ? this.bairro + ". " : "";
        descricao += this.municipio + " - " + this.uf + ". ";
        descricao += this.cep + ".";
        return descricao;
    }

}