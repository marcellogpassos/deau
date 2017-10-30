import { Contatos } from "./contatos";

export class Usuario extends Contatos {

    uid: string;

    nome: string;
    sobrenome: string;
    sexo: string;
    dataNascimento: Date;
    cpf: string;

    static SEXO_FEMININO: string = "F";
    static SEXO_MASCULINO: string = "M";

    getNomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }

}