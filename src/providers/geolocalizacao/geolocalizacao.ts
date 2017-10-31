import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocalizacaoConverter } from '../../converters/geolocalizacao-converter';
import { Geolocalizacao } from '../../model/geolocalizacao';

/*
  Generated class for the GeolocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeolocalizacaoProvider {

  constructor(public http: Http, private geolocationCtrl: Geolocation, public geolocalizacaoConverter: GeolocalizacaoConverter) {
    // console.log('Hello GeolocationProvider Provider');
  }

  getGeolocalizacao(): Promise<Geolocalizacao> {
    return this.geolocationCtrl.getCurrentPosition()
      .then(resp => this.geolocalizacaoConverter.convert({
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude
      }));
  }

}
