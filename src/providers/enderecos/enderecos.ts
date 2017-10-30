import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { Endereco } from '../../model/endereco';

/*
  Generated class for the EnderecosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnderecosProvider {

  constructor(public http: Http) {
    // console.log('Hello EnderecosProvider Provider');
  }

  getEnderecoPrincipalUsuario(uidUsuario: string) {
    return Observable.of(this.getEnderecoMock());
  }

  private getEnderecoMock(): Endereco {
    let endereco = new Endereco();
    endereco.cep = "58030060";
    endereco.uf = "PB";
    endereco.municipio = "João Pessoa";
    endereco.ibge = "2507507";
    endereco.bairro = "Estados";
    endereco.logradouro = "Avenida Goiás";
    endereco.numero = "286";
    endereco.complemento = "Apto. 1703";
    endereco.latitude = -7.116708;
    endereco.longitude = -34.858455;
    return endereco;
  }

}
