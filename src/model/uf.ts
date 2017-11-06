export class Uf {

    codigo: string;
    
    sigla: string;

    descricao: string;

    regiao: string;

    static REGIAO_NORTE: string = "Norte";
    static REGIAO_NORDESTE: string = "Nordeste";
    static REGIAO_SUDESTE: string = "Sudeste";
    static REGIAO_SUL: string = "Sul";
    static REGIAO_CENTRO_OESTE: string = "Centro-Oeste";

    constructor(codigo: string, sigla: string, descricao: string, regiao: string) {
        this.codigo = codigo;
        this.sigla = sigla;
        this.descricao = descricao;
        this.regiao = regiao;
    }

    static getUfs(): Uf[] {
        return [
            new Uf("11", "RO", "Rondônia", Uf.REGIAO_NORTE),
            new Uf("12", "AC", "Acre", Uf.REGIAO_NORTE),
            new Uf("13", "AM", "Amazonas", Uf.REGIAO_NORTE),
            new Uf("14", "RR", "Roraima", Uf.REGIAO_NORTE),
            new Uf("15", "PA", "Pará", Uf.REGIAO_NORTE),
            new Uf("16", "AM", "Amapá", Uf.REGIAO_NORTE),
            new Uf("17", "TO", "Tocantins", Uf.REGIAO_NORTE),
    
            new Uf("21", "MA", "Maranhão", Uf.REGIAO_NORDESTE),
            new Uf("22", "PI", "Piauí", Uf.REGIAO_NORDESTE),
            new Uf("23", "CE", "Ceará", Uf.REGIAO_NORDESTE),
            new Uf("24", "RN", "Rio Grande do Norte", Uf.REGIAO_NORDESTE),
            new Uf("25", "PB", "Paraíba", Uf.REGIAO_NORDESTE),
            new Uf("26", "PE", "Pernambuco", Uf.REGIAO_NORDESTE),
            new Uf("27", "AL", "Alagoas", Uf.REGIAO_NORDESTE),
            new Uf("28", "SE", "Sergipe", Uf.REGIAO_NORDESTE),
            new Uf("29", "BA", "Bahia", Uf.REGIAO_NORDESTE),
    
            new Uf("31", "MG", "Minas Gerais", Uf.REGIAO_SUDESTE),
            new Uf("32", "ES", "Espírito Santo", Uf.REGIAO_SUDESTE),
            new Uf("33", "RJ", "Rio de Janeiro", Uf.REGIAO_SUDESTE),
            new Uf("35", "SP", "São Paulo", Uf.REGIAO_SUDESTE),
            
            new Uf("41", "PR", "Paraná", Uf.REGIAO_SUL),
            new Uf("42", "SC", "Santa Catarina", Uf.REGIAO_SUL),
            new Uf("43", "RS", "Rio Grande do Sul", Uf.REGIAO_SUL),
    
            new Uf("50", "MS", "Mato Grosso do Sul", Uf.REGIAO_CENTRO_OESTE),
            new Uf("51", "MG", "Mato Grosso", Uf.REGIAO_CENTRO_OESTE),
            new Uf("52", "GO", "Goiás", Uf.REGIAO_CENTRO_OESTE),
            new Uf("53", "DF", "Distrito Federal", Uf.REGIAO_CENTRO_OESTE),
        ];
    }

}