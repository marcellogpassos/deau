import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import firebase from 'firebase';
import { Distribuidor } from '../../model/distribuidor';
import { Comentario } from '../../model/comentario';
import { ComentarioConverter } from '../../converters/comentario-converter';

/*
  Generated class for the ComentariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComentariosProvider {

  constructor(public http: Http, public comentarioConverter: ComentarioConverter) {
    // console.log('Hello ComentariosProvider Provider');
  }

  listarComentariosDistribuidor(distribuidor: Distribuidor): Promise<Comentario[]> {
    return firebase.database().ref("/comentariosDistribuidor/" + distribuidor.uid).once("value")
      .then(snapshot => this.comentarioConverter.convertList(snapshot.val()));
  }

}
