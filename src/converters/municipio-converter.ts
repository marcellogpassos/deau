import { Injectable } from "@angular/core";

import { Municipio } from "../model/municipio";
import { Uf } from "../model/uf";

@Injectable()
export class MunicipioConverter {

    convert(dados: any, uf: Uf): Municipio {
        return new Municipio(dados.id, dados.nome, uf);
    }

    convertList(dados: any, uf: Uf): Municipio[] {
        let municipios: Municipio[] = [];
        dados.forEach(element => municipios.push(this.convert(element, uf)));
        return municipios;
    }

}