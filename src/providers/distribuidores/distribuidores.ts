import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import firebase from 'firebase';

import { AvaliacoesDistribuidor } from '../../model/avaliacoes-distribuidor';
import { Distribuidor } from '../../model/distribuidor';
import { Endereco } from '../../model/endereco';

import { AvaliacoesDistribuidorConverter } from '../../converters/avaliacoes-distribuidor-converter';
import { DistribuidorConverter } from '../../converters/distribuidor-converter';
import { EnderecosConverter } from '../../converters/enderecos-converter';

/*
  Generated class for the DistribuidoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DistribuidoresProvider {

  constructor(public http: Http, public distribuidorConverter: DistribuidorConverter,
    public avaliacoesDistribuidorConverter: AvaliacoesDistribuidorConverter, public enderecoConverter: EnderecosConverter) {
    // console.log('Hello DistribuidoresProvider Provider');
  }

  listarDistribuidores(): Promise<Distribuidor[]> {
    return firebase.database().ref("/distribuidores").once("value")
      .then(snapshot => this.distribuidorConverter.convertList(snapshot.val()));
  }

  getDistribuidor(uid: string): Promise<Distribuidor> {
    return firebase.database().ref("/distribuidores/" + uid).once("value")
      .then(snapshot => this.distribuidorConverter.convert(snapshot.val(), uid));
  }

  getEnderecoDistribuidor(distribuidor: Distribuidor): Promise<Endereco> {
    return firebase.database().ref("/enderecoDistribuidor/" + distribuidor.uid).once("value")
      .then(snapshot => this.enderecoConverter.convert(snapshot.val()));
  }

  getAvaliacoesDistribuidor(distribuidor: Distribuidor): Promise<AvaliacoesDistribuidor> {
    return firebase.database().ref("/avaliacoesDistribuidor/" + distribuidor.uid).once("value")
      .then(snapshot => this.avaliacoesDistribuidorConverter.convert(snapshot.val()));
  }

  getImagemGrandeDistribuidor(distribuidor: Distribuidor): Promise<string> {
    return firebase.storage().ref(distribuidor.imagemGrande).getDownloadURL();
  }

}
