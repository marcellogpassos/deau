import { Uf } from "./uf";

export class Municipio {

    codigo: string;

    descricao: string;

    uf: Uf;

    constructor(codigo: string, descricao: string, uf: Uf) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.uf = uf;
    }

}