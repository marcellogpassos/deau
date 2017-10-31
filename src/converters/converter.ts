export interface Converter<T> {

    convert(dados: any, uid?: string): T;

    convertList(dados: any): T[];

}