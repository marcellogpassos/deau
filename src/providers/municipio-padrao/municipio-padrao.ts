import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Uf } from '../../model/uf';
import { MunicipioConverter } from '../../converters/municipio-converter';
import { Municipio } from '../../model/municipio';

/*
  Generated class for the MunicipioPadraoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MunicipioPadraoProvider {

  static LISTAR_MUNICIPIOS_URL: string = "http://servicodados.ibge.gov.br/api/v1/localidades/estados/:id/municipios";

  constructor(public http: Http, public converter: MunicipioConverter,
    private storage: Storage) {
  }

  listarMunicipios(uf: Uf): Observable<Municipio[]> {
    let url = MunicipioPadraoProvider.LISTAR_MUNICIPIOS_URL
      .replace(":id", uf.codigo);
    return this.http.get(url)
      .map(response => this.converter.convertList(response.json(), uf));
  }

  salvarMunicipioPadrao(municipio: Municipio): Promise<any> {
    return this.storage.set("municipio", municipio);
  }

  recuperarMunicipioPadrao(): Promise<Municipio> {
    return this.storage.get("municipio");
  }

}
