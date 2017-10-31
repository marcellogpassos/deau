import { Injectable } from "@angular/core";
import { Geolocalizacao } from "../model/geolocalizacao";
import { Converter } from "./converter";

@Injectable()
export class GeolocalizacaoConverter implements Converter<Geolocalizacao> {

    convert(dados: any, uid?: string): Geolocalizacao {
        let geo: Geolocalizacao = new Geolocalizacao();
        geo.latitude = dados.latitude;
        geo.longitude = dados.longitude;
        return geo;
    }

    convertList(dados: any): Geolocalizacao[] {
        throw new Error("Method not implemented.");
    }

}