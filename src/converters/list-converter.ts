import { Converter } from "./converter";

export abstract class ListConverter<T> implements Converter<T> {
    
    abstract convert(dados: any, uid?: string): T;

    convertList(dados: any): T[] {
        if (!dados)
            return null;
        let lista: T[] = [];
        let keys = Object.keys(dados);
        keys.forEach(uid => lista.push(this.convert(dados[uid], uid)));
        return lista;
    }

}