import { Injectable } from "@angular/core";
import { Geolocalizacao } from "../model/geolocalizacao";

@Injectable()
export class GeolocalizacaoConverter {

    constructor() {
        
    }

    converterGeolocalizacao(latitude: number, longitude: number): Geolocalizacao {
        let geo: Geolocalizacao = new Geolocalizacao();
        geo.latitude = latitude;
        geo.longitude = longitude;
        return geo;
    }

}