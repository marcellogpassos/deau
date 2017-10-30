import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Usuario } from '../../model/usuario';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  constructor(public http: Http) {
    // console.log('Hello UsuariosProvider Provider');
  }

  getUsuario(uid: string): Observable<Usuario> {
    return Observable.of(this.getUsuarioMock());
  }

  private getUsuarioMock(): Usuario {
    let usuario = new Usuario();
    usuario.uid = "1";
    usuario.nome = "Marcello";
    usuario.sobrenome = "Galdino Passos";
    usuario.sexo = Usuario.SEXO_MASCULINO;
    usuario.dataNascimento = new Date("1990-5-4");
    usuario.cpf = "08417523464";
    return usuario;
  }

}
