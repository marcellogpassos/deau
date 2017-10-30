import { Contatos } from "./contatos";
import { AvaliacoesDistribuidor } from "./avaliacoes-distribuidor";

export class Distribuidor extends Contatos {

    uid: string;

    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;

    dataCadastro: Date;
    dataAtualizacao: Date;

    imagemPequena: string;
    imagemGrande: string;

    avaliacoes: AvaliacoesDistribuidor;

    gasCozinha: boolean;
    aguaMineral: boolean;
    
}